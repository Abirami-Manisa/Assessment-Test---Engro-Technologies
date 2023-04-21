import {
  FETCH_NEWS_START,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_SUCCESS,
} from "../constants/constant";

const initialState = {
  news: [],
  loading: false,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_START:
      return { ...state, loading: true, error: null };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: [...state.news, ...action.payload],
        loading: false,
      };
    case FETCH_NEWS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default newsReducer;
