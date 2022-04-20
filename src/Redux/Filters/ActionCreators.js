import FILTERS_ACTION_TYPES from "./ActionTypes";

export const changeFilter = (filter) => {
  return { type: FILTERS_ACTION_TYPES.CHANGE_FILTER, payload: filter };
};

export const changeSort = (sort) => {
  return { type: FILTERS_ACTION_TYPES.CHANGE_SORT, payload: sort };
};
