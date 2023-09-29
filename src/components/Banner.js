import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Og from "../assets/images/ph1.jpg";

const Banner = () => {
    return (
        <Box
            sx={{
                background: "url(" + Og + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "550px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "white",
                padding: "20px",
                marginTop: "15px",
            }}
        >
            <Typography
                variant="h3"
                fontWeight="bold"
                fontSize="55px"
                mt="90px"
            >
                Be Your Best Version
            </Typography>
            <Typography fontSize="24px" mb="30px">
                Train, Shine, and Do It Again
            </Typography>
            <Typography fontSize="18px" mb="40px">
                Discover tailored exercises designed just for you
            </Typography>
            <Button
                variant="contained"
                color="success"
                href="#exercises"
                style={{
                    padding: "12x 28px",
                    fontSize: "18px",
                    textTransform: "none",
                    borderRadius: "4px",
                    marginBottom: "-20px",
                    marginTop: "30px",
                }}
            >
                Explore Workouts
            </Button>
        </Box>
    );
};

export default Banner;
