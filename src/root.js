import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div
    style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        
      }} >
        <Outlet/>
    </div>
    
  );
}

export default Root;
