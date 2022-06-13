import NOTE_ACTION_TYPES from "./constants/ActionTypes";



const notesReducer = (notes = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case NOTE_ACTION_TYPES.ADD_NOTE: {
      return [...notes, payload];
    }
    case NOTE_ACTION_TYPES.REMOVE_NOTE: {
      const { id } = payload;
      return notes.filter((note) => note.id !== id);
    }
    case NOTE_ACTION_TYPES.EDIT_NOTE: {
      return notes.map((note) => note.id === payload.id ? payload : note)
    }
    case NOTE_ACTION_TYPES.FETCH_ALL: {
      return payload;
    }
    default: {
      return []
      // return notes;
    }
  }
};

export default notesReducer;
