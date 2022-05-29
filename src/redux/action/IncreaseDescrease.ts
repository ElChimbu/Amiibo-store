type TQuantity = {
    headTail: string | undefined,
    quantity: number
}

const IncreaseAction = {
    increase: (quantity : TQuantity) => {        
        return (dispatch: any) => {                                    
            dispatch({
                type: "INCREASE",
                payload: quantity
            })
        }
    }
}

export default IncreaseAction