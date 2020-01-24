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
    const update = await groceryHack.updateOne(id, item);
    if (update.nModified === 0) {
      throw new Error('failure to update item')
    }
    return await getList();
  } catch (error) {
    console.error(error);
    return await getList();
  }
}

const deleteItem = async (id) => {
  try {
    await groceryHack.deleteOne(id);
  } catch (error) {
    console.error(error);
  }
  return await getList()
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