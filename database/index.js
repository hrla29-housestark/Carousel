const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/adidas', { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo Database'))
  .catch(err => console.error(err));

const adidasSchema = mongoose.Schema({
  productId: Number,
  productName: String,
  productType: String,
  imageUrl: [String],
  price: String,
  color: [String]
});

const Adidas = mongoose.model('Adidas', adidasSchema);

module.exports = Adidas;
