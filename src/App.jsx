import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import SinglePage from "./pages/SinglePage/SinglePage";
import CategoryPage from "./pages/SportsPage/CategoryPage/CategoryPage";
import CricketPage from "./pages/SportsPage/CricketPage/CricketPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports/">
            <Route index element={<CategoryPage />} />
            <Route path="cricket" element={<CricketPage />} />
            <Route path="cricket/:id" element={<SinglePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
