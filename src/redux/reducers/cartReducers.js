export const ADD_PIZZA = 'ADD_PIZZA';

const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA:
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const allPizzasArr = [].concat.apply([], Object.values(newItems))
            // Еще один вариант: const allPizzasArr = Object.values(newItems).flat(Infinity)

            return {
                ...state,
                items: newItems,
                itemsCount: allPizzasArr.length,
                totalPrice: allPizzasArr.reduce((sum, obj) => obj.price + sum, 0)
            }
        default:
            return state
    }
}

export default cart