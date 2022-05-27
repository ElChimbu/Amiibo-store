import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    cartRoot: cartReducer,
})

export default rootReducer