import Movies from "./components/Movies";
import MenuMain from "./components/MenuMain";
import MovieDetails from "./components/MovieDetails";

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
            <Route
              exact
              path="/movieDetails"
              element={<MovieDetails props={{ movie: {} }} />}
            />
          </Routes>
        </>
      </Provider>
    </Router>
  );
}

export default App;
