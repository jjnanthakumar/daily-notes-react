import FILTERS_ACTION_TYPES from "./ActionTypes";

export const changeFilter = (sort, filter, subFilter) => {
  return { type: FILTERS_ACTION_TYPES.CHANGE_FILTER, payload: { sort, subFilter, filter } };
};

export const resetFilter = () => {
  return { type: FILTERS_ACTION_TYPES.RESET_FILTER, payload: null };
};
