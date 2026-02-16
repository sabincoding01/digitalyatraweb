import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UseEffect from "./useEffect";
import NavBar from "./component/NavBar";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/use_effect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
