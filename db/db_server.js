var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
require('dotenv').config({ path: "../env"})

mongoose.connect(`mongodb+srv://hackmazon:${process.env.password}@groceryhackdb-qu1yo.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected successfully to server');
});


const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  aisle: Number,
  quantity: String,
  needed: Boolean,
  image: String,
  approved: Boolean,
  availableInStore: Boolean,
  purchased: Boolean,
}, {collection: 'grocery-hack' });

const groceryHack = mongoose.model('groceryHack', schema);

const dropCollection = function(callback) {
  db.dropCollection('grocery-hack', function (err, result) {
    if (err) {
      console.log('error delete collection', err);
      callback();
    } else {
      console.log('delete collection success');
      callback();
    }
  });
};
module.exports = { groceryHack, dropCollection };