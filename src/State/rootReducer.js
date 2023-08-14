import { combineReducers } from "redux";
import amountReducer from "./Reducer/amountReducer"
import todoOperationReducer from "./Todo/Rducer/todoReducer"

const rootReducer =combineReducers({
    amountReducer,
    todoOperationReducer,

})

export default rootReducer