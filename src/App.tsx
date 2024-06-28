import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./components/Home";
import { ListElements } from "./components/ListElements";
import { Tasks } from "./components/Tasks";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListElements />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
