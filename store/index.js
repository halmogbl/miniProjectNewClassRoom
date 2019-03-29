import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import redcuersFile from "./redcuers";
const store = createStore(redcuersFile, applyMiddleware(thunk));

export default store;
