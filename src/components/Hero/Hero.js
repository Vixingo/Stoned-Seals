import React from "react";
import { Box, Typography } from "@mui/material";
import Smoke from "../Somke/Smoke";
import zIndex from "@mui/material/styles/zIndex";
function Hero() {
    return (
        <>
            <section className="Hero" style={{ marginBottom: "100px" }}>
                <div className="container">
                    <Box
                        className="hero_img"
                        sx={{
                            textAlign: "center",
                            position: "relative",
                        }}
                    >
                        <Box sx={{ maxWidth: "680px", margin: "0 auto" }}>
                            {" "}
                            <img src="../img/hero.png" alt="" width={"100%"} />
                        </Box>

                        <Box
                            sx={{
                                position: "absolute",
                                top: "60%",
                                left: "50%",
                                transform: "translate(50%)",
                                zIndex: 2,
                            }}
                        >
                            <Smoke />
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#fff",
                            fontFamily: "Bungee",
                            fontSize: "73px",
                        }}
                    >
                        <span style={{ color: "#FCC83A" }}> 1,420 </span>
                        STONED SEALS
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "27px",
                            textAlign: "center",
                            fontFamily: "Bungee",
                            color: "#fff",
                            maxWidth: "790px",
                            margin: "0 auto",
                            marginBottom: "25px",
                        }}
                    >
                        have come together on the{" "}
                        <span style={{ color: "#FCC83A" }}>
                            Solana Blockchain{" "}
                        </span>{" "}
                        to create a community you can value.{" "}
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#FCC83A",
                            fontFamily: "Bungee",
                            maxWidth: "600px",
                            margin: "0 auto",
                            fontSize: "14px",
                        }}
                    >
                        Each Stoned Seal brings utility with daily token
                        airdrops, breeding, and exclusive holder perks
                    </Typography>
                </div>
            </section>
        </>
    );
}

export default Hero;
