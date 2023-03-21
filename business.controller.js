const puppeteer = require('puppeteer');
const { Business } = require('./business.model');

const scrapeBusiness = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const name = await page.$eval('h1', (el) => el.innerText);
  const logoUrl = await page.$eval('img.logo', (el) => el.src);
  const bannerUrl = await page.$eval('img.banner', (el) => el.src);
  const socialLinks = await page.$$eval('a.social-link', (els) => els.map((el) => el.href));
  const rssFeedUrl = await page.$eval('a.rss-feed', (el) => el.href);
  const overview = await page.$eval('.overview', (el) => el.innerText);

  await browser.close();

  return { name, logoUrl, bannerUrl, socialLinks, rssFeedUrl, overview };
};

const createBusiness = async (req, res) => {
  const { url } = req.body;

  try {
    const businessData = await scrapeBusiness(url);
    const business = new Business(businessData);
    await business.save();
    res.send('Business saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving business');
  }
};

const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.send(businesses);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving businesses');
  }
};

module.exports = { createBusiness, getAllBusinesses };
