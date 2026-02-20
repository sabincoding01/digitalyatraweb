import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UseEffect from "./useEffect";
import Layout from "./layout/Layout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { TopBarProvider } from "./context/TopBarContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth pages - NavBar/TopBar छैन */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Main pages - Layout (NavBar + TopBar) सहित */}
        <Route
          path="/*"
          element={
            <TopBarProvider>
              <Layout />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/use_effect" element={<UseEffect />} />
              </Routes>
            </TopBarProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
