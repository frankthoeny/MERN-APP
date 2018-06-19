var mongoose = require('mongoose');

var ListingSchema = new mongoose.Schema({
  listing_date: {
          type: Date,
          required: 'Please fill Listing Date'
        },
  address: {
          type:String,
          default: '',
          required: 'Please fill Address',
          trim: true
        },
  city: {
          type:String,
          default: '',
          required: 'Please fill Address',
          trim: true
        },
  state: {
          type:String,
          default: '',
          required: 'Please fill Address',
          trim: true
        },
  zip: String,
  mls: {
          type:String,
          default: '',
          required: 'Please fill MLS',
          trim: true
        },
  price: {
          type:String,
          default: '',
          required: 'Please fill Price',
          trim: true
        },
  agent: String,
  broker: String,
  description: String,
  publisher: String,
  updated_date: {
          type: Date,
          default: Date.now
        },
});

module.exports = mongoose.model('Listing', ListingSchema);
