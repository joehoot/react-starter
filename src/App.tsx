import { Routes, Route, Link } from "react-router";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Page 1</Link>
        <Link to="/page-2">Page 2</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
