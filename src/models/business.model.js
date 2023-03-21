const mongoose = require('mongoose');

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
});

const Business = mongoose.model('Business', BusinessSchema);

