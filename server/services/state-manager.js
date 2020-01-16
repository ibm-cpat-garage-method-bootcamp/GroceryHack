// const state = {
//     shoppingList: [
//       {
//         name: "Eggs",
//         aisle: Math.floor(Math.random() * (12 - 1)) + 1,
//         quantity: "1",
//         needed: true,
//         image: undefined,
//         approved: true,
//         availableInStore: true,
//         purchased: false
//       },
//       {
//         name: "Milk",
//         aisle: Math.floor(Math.random() * (12 - 1)) + 1,
//         quantity: "1",
//         needed: true,
//         image: undefined,
//         approved: true,
//         availableInStore: true,
//         purchased: false
//       },
//       {
//         name: "Zebra Cakes",
//         aisle: Math.floor(Math.random() * (12 - 1)) + 1,
//         quantity: "1",
//         needed: true,
//         image: undefined,
//         approved: true,
//         availableInStore: true,
//         purchased: false
//       },
//       {
//         name: "Honey",
//         aisle: Math.floor(Math.random() * (12 - 1)) + 1,
//         quantity: "1",
//         needed: true,
//         image: undefined,
//         approved: true,
//         availableInStore: true,
//         purchased: false
//       },
//     ],
//   }

  const stateManager = {
    state: {
        shoppingList: []
      },

      getList() {
        return this.state.shoppingList
      },

      addItem(item) {
        this.state.shoppingList = [...this.state.shoppingList, item];
        return true
      },

      deleteItem(deletedItem) {
        const stateCopy = this.state.shoppingList.filter(item => item.name !== deletedItem.name)
        this.state.shoppingList = stateCopy;
        return this.state.shoppingList
      }

      // updateItem(item) {
      //   TODO: do stuff
      // }
  }

  module.exports = stateManager;