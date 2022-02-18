import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComminPage from "./pages/ComminPage";
import { Box } from "@mui/material";
import Smoke from "./components/Somke/Smoke";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />{" "}
                    <Route path="Mint" element={<ComminPage />} />
                </Routes>
            </BrowserRouter>
            <Box sx={{ position: "absolute", top: "0px", zIndex: -1 }}>
                <img src="../img/BG1.png" alt="" />
                <Smoke />
            </Box>
            <Box sx={{ position: "absolute", top: "442px", zIndex: -1 }}>
                <img src="../img/BG2.png" alt="" />
                <Box sx={{ display: "flex", marginTop: "-50px" }}>
                    <Smoke />
                    <Smoke />
                </Box>
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    zIndex: -1,
                }}
            >
                <Box sx={{ MarginTop: "-100px" }}>
                    <Smoke />
                </Box>
                <img src="../img/BG3.png" alt="" />{" "}
                <Box
                    sx={{
                        display: "flex",
                        marginTop: "-60px",
                    }}
                >
                    <Smoke />
                </Box>
            </Box>
        </>
    );
}

export default App;
