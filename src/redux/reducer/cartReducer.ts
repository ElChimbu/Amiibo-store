import uniqBy from 'lodash/uniqBy'

const cartReducer = (state = {cart: <any>[]}, action : any) => {
    switch(action.type){
        case "ADD_TO_CART":
        const filteredArr = uniqBy([...state.cart, action.payload], 'headTail')
        return {
            cart: [...filteredArr] 
        }
        // case "INCREASE":
        // const increasedArr = state.cart.filter((filtered : any) => {
        //     if(action.payload.headTail === filtered.headTail){
        //         console.log(action.payload.quantity);
                
        //         return [...state.cart, {quantity: 3} ]
        //     }
        // })
        // return {
        //     cart: increasedArr
        // }

        case "REMOVE":
            const removedItem = state.cart.filter((filtered : any) => {
                    return action.payload.headTail !== filtered.headTail
            })
            console.log(removedItem);
            
            return {
                cart: removedItem
            }
        default:
         return state
    }
}

export default cartReducer