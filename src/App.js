import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { PageNotFound } from "./pages/PageNotFound";
import { MealPage } from "./pages/MealPage";
import { FavoritesMealsPage } from "./pages/FavoritesMealsPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/meals" element={<Homepage />} />
        <Route path="/meals/:idMeal" element={<MealPage />} />
        <Route path="/favorites" element={<FavoritesMealsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
