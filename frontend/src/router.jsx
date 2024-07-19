import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/results";


const router = () => {
    return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
    </Routes>
    );
};
export default router;