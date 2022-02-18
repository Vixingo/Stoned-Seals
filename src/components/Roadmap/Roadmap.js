import React from "react";
import { Box, Typography } from "@mui/material";
import RoadBoxHolder from "./RoadBoxHolder";
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
                            mt: 1,
                        }}
                    >
                        ROADMAP
                    </Typography>
                    <RoadBoxHolder />
                </div>
            </section>
        </>
    );
}

export default Roadmap;
