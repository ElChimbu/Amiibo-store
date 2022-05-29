import uniqBy from 'lodash/uniqBy'

const cartReducer = (state = {cart: <any>[]}, action : any) => {
    switch(action.type){
        case "ADD_TO_CART":
        const filteredArr = uniqBy([...state.cart, action.payload], 'headTail')
        return {
            cart: [...filteredArr] 
        }
        case "INCREASE":
        const increasedArr = state.cart.filter((filtered : any) => {
            if(action.payload.headTail === filtered.headTail){
                console.log(action.payload.quantity);
                
                return {...state.cart, quantity : 3}
            }
        })
        console.log(...increasedArr, action.payload.quantity);
        
        return {
            cart: increasedArr
        }
        default:
         return state
    }
}

export default cartReducer