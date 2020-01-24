var mongoose = require('mongoose');
var db = mongoose.connection;
// var Schema = mongoose.Schema;
require('dotenv').config()

mongoose.connect(`mongodb+srv://grocery_hack:${process.env.PASSWORD}@groceryhackdb-qu1yo.mongodb.net/test?retryWrites=true&w=majority`, {useNewUrlParser: true});


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected successfully to server');
});


const schema = new mongoose.Schema({
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

const getList = async () => {
  try {
    const groceryList = await groceryHack.find();
    return groceryList
  } catch (error) {
    return `error of , ${error}`
  }
}

const addItem = async (item) => {
  try {
    const data = await groceryHack.create(item);
    if (!data) {
      return false
    }
    return true
  } catch (error) {
    console.error(`error of , ${error}`)
    return false
  }
}

const putItem = async (id, item) => {
  try {
  const groceryList = await groceryHack.updateOne(id, item).find();
  return groceryList;
  } catch (error) {
    console.error(error);
    return getList();
  }
}

const deleteItem = async (id) => {
  try {
    const groceryList = await groceryHack.deleteOne(id).find();
    return groceryList;
  } catch (error) {
    console.error(error);
    return getList();
  }
}

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
module.exports = { groceryHack, dropCollection, getList, addItem, putItem, deleteItem };