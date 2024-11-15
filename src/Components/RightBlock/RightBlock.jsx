import "./RightBlock.css"
import TopSearchBar from "../TopBar/TopSearchBar/TopSearchBar.jsx";
import TopNavigation from "../TopBar/TopNavigation/TopNavigation.jsx";
import AppRoutes from "../../AppRoutes/AppRoutes.jsx";



import Footer from "../Footer/Footer.jsx";
function RightBlock() {


  return (
    <div style={{width:"100%"}}>
      <TopSearchBar />
      <TopNavigation />
      <AppRoutes />
      <Footer />

    </div>);
}

export default RightBlock;