import { Box } from "@mui/material";
import React from "react";
import SideNavbar from "../components/SideNavbar";
import NavBar from "../components/NavBar";

export default function About() {
  return (
    <>
    <NavBar/>
      <Box sx={{ display: "flex" }}>
        <SideNavbar />
        <h1>About</h1>
      </Box>
    </>
  );
}
