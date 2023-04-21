import React, { useEffect, useState, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchNews } from "../redux/actions/actions";
import NewsItem from "./newsItem";
import "./newsItemsList.css";

const NewsList = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const dispatch = useDispatch();

  const news = useSelector((state) => state.news);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
     dispatch(fetchNews(page)).then((data) => {
      setTotalPages(data);
    });
  }, [dispatch, page]);

  useEffect(() => {

    const handleScroll = () => {
      //scrollTop: This property returns the number of pixels that the document is 
      //currently scrolled vertically. It indicates the distance between 
      //the top of the content and the top of the viewport.
  
      //clientHeight: This property returns the height of the viewport in pixels,
      //including padding but not including borders, margins, or the scrollbar.
  
      //scrollHeight: This property returns the height of the entire document,
      //including content not visible on the screen due to scrolling,
      //but excluding margins, borders, and padding.
  
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const allDataLoaded = totalPages !== null && page >= totalPages;

  return (
    <div className="news-list">
      <h1 className="news-list__title">Hacker News</h1>
      {news.map((item) => (
        <Suspense
          fallback={<div>Loading...</div>}
          key={item.id + Math.random()}
        >
          <NewsItem item={item} />
        </Suspense>
      ))}
      {loading && <div className="news-list__loading">Loading...</div>}
      {error && <div className="news-list__error">{error}</div>}
      {allDataLoaded && <div className="news-list__end">End of news list.</div>}
    </div>
  );
};

export default NewsList;
