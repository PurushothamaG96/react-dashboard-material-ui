import { Box } from "@mui/material";
import React from "react";
import SideNavbar from "../components/SideNavbar";
import NavBar from "../components/NavBar";

function Setting(props) {
  return (
    <>
    <NavBar/>
      <Box sx={{ display: "flex" }}>
        <SideNavbar />
        <h1>Settings</h1>
      </Box>
    </>
  );
}

export default Setting;
