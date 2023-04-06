const mongoose = require('mongoose')
const Joi = require('joi')

const BusinessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logoUrl: String,
  bannerUrl: String,
  socialLinks: [String],
  rssFeedUrl: String,
  overview: String,
})
const validate = (business) => {
	const schema = Joi.object({
    name: Joi.string().required(),
    logoUrl: Joi.string(),
    bannerUrl: Joi.string(),
    socialLinks: Joi.array().items(Joi.string()),
    rssFeedUrl: Joi.string(),
    overview: Joi.string(),
	
	})
  return schema.validate(business);
}

const Business = mongoose.model('Business', BusinessSchema);

module.exports = { Business, validate }
