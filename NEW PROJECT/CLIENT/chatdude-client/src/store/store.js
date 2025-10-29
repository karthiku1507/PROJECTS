import{legacy_createStore, applyMiddleware, combineReducers} from "redux";
import logger from "redux-logger";
// import chatReducer from "../reducers/chatReducer";
// import messageReducer from "../reducers/messageReducer";
// import userReducer from "../reducers/userReducer";
import Reducer from "../reduxStore/Reducer";
import chatReducer from "../reducers/chatReducer";
const combineReducer = combineReducers({Reducer,chatReducer});

var store = legacy_createStore(combineReducer,applyMiddleware(logger));

export default store;