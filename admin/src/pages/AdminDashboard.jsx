import React from "react";
import SideBar from "../Components/SideBar";
import RightDiv from "../Components/RightDiv";

const AdminDashboard = () => {
  return (
    <>
      <div className="Container">
        {" "}
         {/* create one container and divede two components all css availble in index.css */}
        <div className="sidebar">
          <SideBar></SideBar>
        </div>
        <div className="rightdiv">
          <RightDiv></RightDiv>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
