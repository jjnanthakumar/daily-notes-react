import FILTERS_ACTION_TYPES from "./ActionTypes";

const defaultState = { filter: "all", sort: "new", subFilter: "" };

const filtersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTERS_ACTION_TYPES.CHANGE_FILTER:
      return payload;
    case FILTERS_ACTION_TYPES.RESET_FILTER:
    default:
      return defaultState;
  }
};

export default filtersReducer;
