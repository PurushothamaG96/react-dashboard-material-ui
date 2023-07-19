import { Box } from "@mui/material";
import React from "react";
import SideNavbar from "../components/SideNavbar";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
    <NavBar/>
      <Box sx={{ display: "flex" }}>
        <SideNavbar />
        <h1>Home</h1>
      </Box>
    </>
  );
}
