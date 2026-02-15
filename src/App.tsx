import { Routes, Route, useNavigate } from "react-router";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <button type="button" onClick={() => void navigate("/")}>
          Page 1
        </button>
        <button type="button" onClick={() => void navigate("/page-2")}>
          Page 2
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>
    </>
  );
}
