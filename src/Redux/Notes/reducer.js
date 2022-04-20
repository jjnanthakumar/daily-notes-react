import NOTE_ACTION_TYPES from "./ActionTypes";

const notesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case NOTE_ACTION_TYPES.ADD_NOTE: {
      return [...state, payload];
    }
    case NOTE_ACTION_TYPES.REMOVE_NOTE: {
      const { id } = payload;
      const notes = state.filter((note) => note.id !== id);
      return notes;
    }
    case NOTE_ACTION_TYPES.EDIT_NOTE: {
      const index = state.findIndex((note) => note.id === payload.id);
      state[index] = payload;
      return state;
    }
    default: {
      // Initializing the Notes from localStorage. If localStorage empty then notes will be []
      let notes = JSON.parse(localStorage.getItem("NOTES"));

      if (notes === null) {
        notes = [];
      } else {
        notes = notes.map((note) => {
          note.date = new Date(note.date);
          return note;
        });
      }

      return notes;
    }
  }
};

export default notesReducer;
