import { IDescriptcion } from "../../pages/ItemResume/ItemDescription"

const addToCartAction = {
    addToCart: (newProduct : IDescriptcion) => {
        return (dispatch: any) => {                                    
            dispatch({
                type: "ADD_TO_CART",
                payload: newProduct
            })
        }
    }
}

export default addToCartAction