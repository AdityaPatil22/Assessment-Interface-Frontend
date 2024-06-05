import { Outlet } from "react-router-dom";
import "./assets/styles/global.scss";
import './Root.scss'

export default function Root() {
  return (
    // <div className="main-section">
    //   {/* <div className="sidebar_section">
    //     <Sidebar />
    //   </div> */}

    //   <div className="content_wrapper">
    //     {/* <Header /> */}
    //     <div className="content_section">
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
    <>
    <Outlet/>
    </>
  );
}
