import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import MainPage from "./containers/MainPage";
import store from "./redux/store";
const loading = (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
