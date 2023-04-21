import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import NewsList from "./components/newsItemsList";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <NewsList />
  </Provider>
);
