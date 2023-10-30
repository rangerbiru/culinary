import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CategoryPage from "./pages/CategoryPage";
import DetailsFood from "./pages/DetailsFood";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailsFood />} />
          <Route path="/category/:makanan" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
