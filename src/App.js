import Movies from "./components/Movies";
import MenuMain from "./components/MenuMain";

import store from "./store";
import { Provider } from "react-redux";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <>
          <MenuMain />
          <Routes>
            <Route exact path="/" element={<Movies />} />
          </Routes>
        </>
      </Provider>
    </Router>
  );
}

export default App;
