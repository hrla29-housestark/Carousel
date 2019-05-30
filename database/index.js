const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/adidas', { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo Database'))
  .catch(err => console.error(err));

const adidasSchema = mongoose.Schema({
  productID: Number,
  productName: String,
  productType: String,
  imageUrl: [String],
  price: Number,
  gender: String,
  type: String,
  defaultColor: String,
  otherColor: String,
  miniImages: [String],
  color2: [String]
});

const Adidas = mongoose.model('Adidas', adidasSchema);

module.exports = Adidas;
