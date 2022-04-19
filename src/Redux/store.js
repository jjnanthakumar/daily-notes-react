import { createStore } from "redux";

import NOTE_ACTION_TYPES from "./ActionTypes";

const defaultState = {
  notes: [],
};

const rootReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case NOTE_ACTION_TYPES.ADD_NOTE:
      return { ...state, notes: [...state.notes, payload] };
    case NOTE_ACTION_TYPES.REMOVE_NOTE: {
      const { id } = payload;
      const notes = state.notes.filter((note) => note.id !== id);
      return { ...state, notes };
    }
    case NOTE_ACTION_TYPES.EDIT_NOTE: {
      const { notes } = state;
      const index = notes.findIndex((note) => note.id === payload.id);
      notes[index] = payload;
      return { ...state, notes };
    }
    default:
      return state;
  }
};

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
