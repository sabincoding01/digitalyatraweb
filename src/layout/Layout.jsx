import React from "react";
import NavBar from "../component/NavBar";
import TopBar from "../component/TopBar";
import { TopBarProvider } from "../context/TopBarContext";

const Layout = () => {
  return (
    <TopBarProvider>
      <div>
        <TopBar />
        <NavBar />
        {/* Spacer for TopBar (40px) + NavBar (80px) */}
        <div className="h-[120px]"></div>
      </div>
    </TopBarProvider>
  );
};
export default Layout;
