import { Stack, Typography } from "@mui/material";
import React from "react";
import { bodyPartImages } from "./BodyPartImages";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    const iconSrc = bodyPartImages[item.toLowerCase().replace(/ /g, "_")];
    return (
        <Stack
            type="button"
            alignItems={"center"}
            justifyContent={"center"}
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? "4px solid grey" : "",
                background: "#fff",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "282px",
                cursor: "pointer",
                gap: "47px",
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            }}
        >
            <img
                src={iconSrc}
                alt={item}
                style={{ width: "40px", height: "40px" }}
            />
            <Typography
                textTransform={"capitalize"}
                fontSize={"24px"}
                fontWeight={"bold"}
                color={"#3A1212"}
                fontFamily="monospace"
            >
                {item}
            </Typography>
        </Stack>
    );
};

export default BodyPart;
