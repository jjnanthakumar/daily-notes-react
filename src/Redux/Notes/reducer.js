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
      const index = notes.findIndex((note) => note.id === payload.id);
      notes[index] = payload;
      localStorage.setItem("NOTES", JSON.stringify(notes));
      return notes;
    }
    case NOTE_ACTION_TYPES.FETCH_ALL: {
      return payload;
    }
    default: {
      console.log('def')
      return []
      // Initializing the Notes from localStorage. If localStorage empty then notes will be []
      // let notes = JSON.parse(localStorage.getItem("NOTES"));
      // var notes = collection(db, 'notes', (snapshot) => {
      //   // setTodos(snapshot.docs.map(doc => doc.data()))
      //   window.notes = snapshot.docs.map(doc => doc.data())
      // })
      // if (notes === null) {
      //   notes = [];
      // } else {
      //   notes = notes.map((note) => {
      //     note.date = new Date(note.date);
      //     return note;
      //   });
      // }

      // return notes;
    }
  }
};

export default notesReducer;
