import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Slider1 from "./components/Slider/Slider1";
import Slider2 from "./components/Slider/Slider2";
import Roadmap from "./components/Roadmap/Roadmap";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Slider1 />
            <Slider2 />
            <Roadmap />
        </>
    );
}

export default App;
