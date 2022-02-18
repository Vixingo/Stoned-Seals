import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Button, Stack } from "@mui/material";
import React from "react";

function Coming() {
    return (
        <>
            <section className="Coming">
                <div className="container">
                    <Box
                        textAlign={"center"}
                        sx={{
                            margin: "200px auto",
                        }}
                    >
                        <Box>
                            <img src="../img/come.png" alt="" />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: "108px",
                                color: "#fff",
                                fontFamily: "Bungee",
                                mb: 9,
                            }}
                        >
                            <span style={{ color: "#FCC83A" }}>COMING</span>{" "}
                            SOON
                        </Typography>
                    </Box>{" "}
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

export default Coming;
