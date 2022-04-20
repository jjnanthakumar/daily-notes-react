import FILTERS_ACTION_TYPES from "./ActionTypes";

const defaultState = { filter: "year", sort: "new" };

const filtersReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTERS_ACTION_TYPES.CHANGE_SORT:
      return { ...state, sort: payload };
    case FILTERS_ACTION_TYPES.CHANGE_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default filtersReducer;
