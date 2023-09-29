import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimiliarEquipmentExercises = ({ equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: "50px", xs: "0px" } }}>
            <Typography
                sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
                fontWeight={700}
                color="#000"
                mb="33px"
            >
                Exercises that use similar{" "}
                <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
                    Equipment
                </span>{" "}
            </Typography>
            <Stack>
                {equipmentExercises.length ? (
                    <HorizontalScrollbar data={equipmentExercises} />
                ) : (
                    <Loader />
                )}
            </Stack>
        </Box>
    );
};

export default SimiliarEquipmentExercises;
