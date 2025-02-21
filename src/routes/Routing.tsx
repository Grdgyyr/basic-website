import { Routes, Route } from "react-router-dom";
import React from "react";
import ResponsiveAppBar from "../components/appbar/AppBar";
import Section1 from "../components/section1/Section1";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";
import Section4 from "../components/section4/Section4";
import Section5 from "../components/section5/Section5";
import Section6 from "../components/section6/Section6";
import Section7 from "../components/section7/Section7";
import Section8 from "../components/section8/Section8";
import Section9 from "../components/section9/Section9";
import Footer from "../components/footer/Footer";
import HR from "../components/hr/hr"; // Import HR Page

const Routing: React.FC = () => {
  return (
    <Routes>
      {/* Main Landing Page */}
      <Route
        path="/"
        element={
          <>
            <ResponsiveAppBar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Footer />
          </>
        }
      />
      {/* HR Page Route */}
      <Route path="/hr/hr" element={<HR />} />
    </Routes>
  );
};

export default Routing;
