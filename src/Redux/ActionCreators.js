import NOTE_ACTION_TYPES from "./ActionTypes";

export const addNote = (note) => {
  return { type: NOTE_ACTION_TYPES.ADD_NOTE, payload: note };
};

export const removeNote = (id) => {
  return { type: NOTE_ACTION_TYPES.REMOVE_NOTE, payload: { id } };
};

export const editNote = (note) => {
  return { type: NOTE_ACTION_TYPES.EDIT_NOTE, payload: note };
};
