import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/system";
import  Details  from "../Pages/Details";
const Router = () => {
  return (
    <Box>
      <Routes>
        <Route path="/details" element={<Details />} />
      </Routes>
      </Box>
  );
};

export default Router;
