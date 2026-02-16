import React from "react";
import NavBar from "../component/NavBar";
import TopBar from "../component/TopBar";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      {/* Spacer for TopBar (40px) + NavBar (80px) */}
      <div className="h-[120px]"></div>
    </div>
  );
};
export default Layout;
