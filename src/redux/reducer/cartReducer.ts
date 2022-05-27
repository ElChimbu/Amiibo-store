import uniqBy from 'lodash/uniqBy'

const cartReducer = (state = {cart: <any>[]}, action : any) => {
    switch(action.type){
        case "ADD_TO_CART":
        const filteredArr = uniqBy([...state.cart, action.payload], 'headTail')
        
        return {
            cart: [...filteredArr]
        }
        default:
         return state
    }
}

export default cartReducer