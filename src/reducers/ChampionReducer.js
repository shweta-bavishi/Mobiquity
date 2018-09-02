import {
  GET_LIST,
  GET_LIST_FAILURE,
  WINNER_LIST,
  WINNER_LIST_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
  champ: [{ season: 0, url: "" }],
  races: [{}]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST:
      return { ...state, champ: action.payload };
    case GET_LIST_FAILURE:
      return { ...state, champ: action.payload };
    case WINNER_LIST:
      return { ...state, races: action.payload };
    case WINNER_LIST_FAILURE:
      return { ...state, races: action.payload };
    default:
      return state;
  }
};
