import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Design1 from "./pages/Design1";
import Design2 from "./pages/Design2";
import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design1" element={<Design1 />} />
          <Route path="/design2" element={<Design2 />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
