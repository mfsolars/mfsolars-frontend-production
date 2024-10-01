import "./RightBlock.css"
import { useEffect, useState } from "react";
import TopSearchBar from "../TopBar/TopSearchBar/TopSearchBar.jsx";
import TopNavigation from "../TopBar/TopNavigation/TopNavigation.jsx";
import AppRoutes from "../../AppRoutes/AppRoutes.jsx";



import Footer from "../Footer/Footer.jsx";
function RightBlock() {


  return (
    <div className="rightblock">
      <TopSearchBar />
      <TopNavigation />
      <AppRoutes />
      <Footer />

    </div>);
}

export default RightBlock;