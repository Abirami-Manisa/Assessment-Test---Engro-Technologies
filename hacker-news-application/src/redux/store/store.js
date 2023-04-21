import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import newsReducer from "../reducers/reducers";

const store = createStore(newsReducer, applyMiddleware(thunk));

export default store;
