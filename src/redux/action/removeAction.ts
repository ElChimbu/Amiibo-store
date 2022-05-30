const removeAction = {
    remove: (headTail : string) => {
        return (dispatch: any) => {                                    
            dispatch({
                type: "REMOVE",
                payload: headTail
            })
        }
    }
}

export default removeAction