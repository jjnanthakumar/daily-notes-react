import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import notesReducer from "./Notes/reducer";
import filtersReducer from "./Filters/reducer";
import thunk from 'redux-thunk'


const rootReducer = combineReducers({ notes: notesReducer, filters: filtersReducer });

// export default rootReducer


const middleware = [thunk]

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
)

export default store

// export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
