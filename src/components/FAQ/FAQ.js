import React from "react";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Button, Stack } from "@mui/material";

function FAQ() {
    return (
        <>
            <section className="FAQ">
                <div className="container">
                    <Box sx={{ textAlign: "center" }}>
                        <img src="../img/faq.png" alt="" />
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#FCC83A",
                            fontFamily: "Bungee",
                            fontSize: "18px",
                            mt: 1,
                        }}
                    >
                        FAQ
                    </Typography>
                    <div className="row my-5">
                        <div className="col-md-6 mb-5">
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#FCC83A",
                                    fontFamily: "Bungee",
                                    fontSize: "16px",
                                }}
                            >
                                How many Stoned Seals are there?
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#fff",
                                    fontFamily: "Bungee",
                                    fontSize: "16px",
                                }}
                            >
                                There will only be 1,420 Stoned Seals.
                            </Typography>
                        </div>
                        <div className="col-md-6 mb-5">
                            {" "}
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#FCC83A",
                                    fontFamily: "Bungee",
                                    fontSize: "16px",
                                }}
                            >
                                What is the mint price?
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#fff",
                                    fontFamily: "Bungee",
                                    fontSize: "16px",
                                }}
                            >
                                0.42 SOL
                            </Typography>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 mb-5">
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#FCC83A",
                                    fontFamily: "Bungee",
                                    fontSize: "16px",
                                }}
                            >
                                When is the mint?
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#fff",
                                    fontFamily: "Bungee",
                                    fontSize: "16px",
                                }}
                            >
                                Please join our discord and follow <br /> us on
                                twitter for more info!
                            </Typography>
                        </div>
                        <div className="col-md-6 mb-5">
                            {" "}
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#FCC83A",
                                    fontFamily: "Bungee",
                                    fontSize: "16px",
                                }}
                            >
                                What is the utility token?
                            </Typography>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: "#fff",
                                    fontFamily: "Bungee",
                                    fontSize: "16px",
                                }}
                            >
                                Our utility token is called $SEALS more <br />
                                info will be available in our discord.
                            </Typography>
                        </div>
                    </div>
                    <Stack
                        sx={{
                            flexDirection: "row",
                            justifyContent: "center",
                            pb: 3,
                        }}
                    >
                        <a className="nav-link" href="#">
                            <IconButton
                                sx={{
                                    color: "#fff",
                                    borderRadius: "50%",
                                    transition: "0.2s",
                                    backgroundColor: "#FCC83A",
                                    paddingLeft: "6px",
                                    paddingRight: "12px",

                                    ":hover": {
                                        color: "#FCC83A",
                                        backgroundColor: "#fff",
                                        boxShadow: " 0 0 10px #fff",
                                    },
                                }}
                            >
                                <i class="fab fa-discord"></i>
                            </IconButton>
                        </a>
                        <a className="nav-link" href="#">
                            <IconButton
                                sx={{
                                    color: "#fff",
                                    borderRadius: "50%",
                                    transition: "0.2s",
                                    backgroundColor: "#FCC83A",
                                    ":hover": {
                                        color: "#FCC83A",
                                        backgroundColor: "#fff",
                                        boxShadow: " 0 0 10px #fff",
                                    },
                                }}
                            >
                                <i class="fab fa-twitter"></i>
                            </IconButton>
                        </a>
                    </Stack>
                </div>
            </section>
        </>
    );
}

export default FAQ;
