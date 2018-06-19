var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  isbn: {
          type:String,
          default: '',
          required: 'Please fill ISBN',
          trim: true
        },
  title: String,
  author: String,
  description: String,
  published_date: {
    type: Date,
    required: 'Please fill Published Date'
   },
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
