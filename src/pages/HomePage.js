import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Slider1 from "../components/Slider/Slider1";
import Slider2 from "../components/Slider/Slider2";
import Roadmap from "../components/Roadmap/Roadmap";
import FAQ from "../components/FAQ/FAQ";
import { Box } from "@mui/material";
function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Slider1 />
            <Slider2 />
            <Roadmap />
            <FAQ />
        </>
    );
}

export default HomePage;
