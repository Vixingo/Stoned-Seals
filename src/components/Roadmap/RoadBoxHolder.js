import React from "react";

import { Box, Typography } from "@mui/material";
import Smoke from "../Somke/Smoke";

function RoadBoxHolder() {
    return (
        <>
            <section
                className="RoadBoxHolder"
                style={{
                    backgroundImage: "url(../img/RoadBG.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                    paddingTop: "100px",
                    paddingBottom: "100px",
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Box
                                sx={{
                                    backgroundColor: "#252525 ",
                                    textAlign: "center",
                                    borderRadius: "27px",
                                    height: "270px",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "-30%",
                                        transform: "translate(-50%)",
                                    }}
                                >
                                    <Box>
                                        <img src="../img/R1.png" alt="" />
                                        <Box position={"absolute"}>
                                            <Smoke />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontFamily: "Bungee",
                                            fontSize: "18px",
                                            mb: 1,
                                        }}
                                    >
                                        STAGE 1
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#FCC83A",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                        }}
                                    >
                                        Website Launch
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#FCC83A",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                        }}
                                    >
                                        Community
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        Whitelist Events
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="col-md-3">
                            <Box
                                sx={{
                                    backgroundColor: "#252525 ",
                                    textAlign: "center",
                                    borderRadius: "27px",
                                    height: "270px",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "-30%",
                                        transform: "translate(-50%)",
                                    }}
                                >
                                    <Box>
                                        <img src="../img/R2.png" alt="" />
                                        <Box position={"absolute"}>
                                            <Smoke />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontFamily: "Bungee",
                                            fontSize: "18px",
                                            mb: 1,
                                        }}
                                    >
                                        STAGE 2
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        Launch
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        Community Donations
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        Rarity Integration
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        Holder Verification
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        Marketplace Listings
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="col-md-3">
                            <Box
                                sx={{
                                    backgroundColor: "#252525 ",
                                    textAlign: "center",
                                    borderRadius: "27px",
                                    height: "270px",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "-30%",
                                        transform: "translate(-50%)",
                                    }}
                                >
                                    <Box>
                                        <img src="../img/R3.png" alt="" />
                                        <Box position={"absolute"}>
                                            <Smoke />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontFamily: "Bungee",
                                            fontSize: "18px",
                                            mb: 1,
                                        }}
                                    >
                                        STAGE 3
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        $SEALS Token Launch
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        Airdrop Portal Release
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="col-md-3">
                            <Box
                                sx={{
                                    backgroundColor: "#252525 ",
                                    textAlign: "center",
                                    borderRadius: "27px",
                                    height: "270px",
                                    position: "relative",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "-30%",
                                        transform: "translate(-50%)",
                                    }}
                                >
                                    <Box>
                                        <img src="../img/R4.png" alt="" />
                                        <Box position={"absolute"}>
                                            <Smoke />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            color: "#fff",
                                            fontFamily: "Bungee",
                                            fontSize: "18px",
                                            mb: 1,
                                        }}
                                    >
                                        STAGE 4
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        Breeding with $SEALS
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#797569",
                                            fontSize: "14px",
                                            fontFamily: "Bungee",
                                            transition: "0.3s",
                                            "&:hover": {
                                                color: "#FCC83A",
                                            },
                                        }}
                                    >
                                        Holder Perks Revealed
                                    </Typography>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RoadBoxHolder;
