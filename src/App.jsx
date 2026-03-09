import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import Layout from "./layout/Layout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import AddCourses from "./AddComponent/AddCourses";
import { TopBarProvider } from "./context/TopBarContext";
import { Provider } from "react-redux";
import store from "../store/store";

function App() {
  return (
    <Provider store={store}>
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
                  <Route path="/add-course" element={<AddCourses />} />
                </Routes>
              </TopBarProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
