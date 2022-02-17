import React from "react";
import { Box, Typography } from "@mui/material";
function Roadmap() {
    return (
        <>
            <section className="Roadmap" style={{ marginTop: "100px" }}>
                <div className="container">
                    <Box sx={{ textAlign: "center" }}>
                        <img src="../img/road.png" alt="" />
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#FCC83A",
                            fontFamily: "Bungee",
                            fontSize: "18px",
                        }}
                    >
                        ROADMAP
                    </Typography>
                </div>
            </section>
        </>
    );
}

export default Roadmap;
