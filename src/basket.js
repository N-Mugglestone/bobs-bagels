class Basket {

    items

    constructor() {
        this.items = [];
    }

    addItem(newItem) {
        return this.items.push(newItem)
    }

    removeItem(itemToRemove) {
        const index = this.items.findIndex(element => itemToRemove === element)
        if (index !== -1) {
            this.items.splice(index, 1)
        }

    }


}

module.exports = Basket