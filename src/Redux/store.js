import { combineReducers, createStore } from "redux";

import notesReducer from "./Notes/reducer";
import filtersReducer from "./Filters/reducer";

const rootReducer = combineReducers({ notes: notesReducer, filters: filtersReducer });

export default createStore(rootReducer);
// export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
