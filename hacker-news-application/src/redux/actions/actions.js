import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_START,
  FETCH_NEWS_SUCCESS,
} from "../constants/constant";

import { fetchTopStoriesIds, fetchStory } from "../../network/api";

export const fetchNewsStart = () => ({
  type: FETCH_NEWS_START,
});

export const fetchNewsSuccess = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news,
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: error,
});

export const fetchNews =
  (page = 1) =>
  async (dispatch) => {
    dispatch(fetchNewsStart());

    try {
      const ids = await fetchTopStoriesIds();
      const start = (page - 1) * 10;
      const end = page * 10;
      const newsIds = ids.slice(start, end);

      const news = await Promise.all(newsIds.map((id) => fetchStory(id)));
      dispatch(fetchNewsSuccess(news));
      return ids
    } catch (error) {
      dispatch(fetchNewsFailure(error.message));
    }
  };
