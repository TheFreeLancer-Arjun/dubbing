import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUpPage from "./components/SignUpPage";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Home />} />

          {/* Sign-Up Page */}
          <Route path="/signup" element={<SignUpPage />} />



          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
