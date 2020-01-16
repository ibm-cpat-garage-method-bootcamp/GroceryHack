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

<<<<<<< HEAD
      putItem(updatedItem) {
        const stateCopy = this.state.shoppingList.map(item => {
          if (item.name === updatedItem.name) {
            item = updatedItem
          }
          return item;
        })
        this.state.shoppingList = stateCopy;
        return this.state.shoppingList
      },

=======
>>>>>>> 217b2e1d3e04673eada3ea49218c3f438b72ffb0
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