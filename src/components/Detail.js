import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Favorite from "../assets/icons/AddFav.png";
import NotFavorite from "../assets/icons/RemoveFav.png";
import MuscleImg from "../assets/icons/exercise.png";
import EquimpmentImg from "../assets/icons/gym.png";
import BodyPartImg from "../assets/icons/yoga.png";

const Detail = ({
    exerciseDetail,
    favoriteExerciseIds,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
}) => {
    const { gifUrl, bodyPart, name, target, equipment, id } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImg,
            name: bodyPart,
        },
        {
            icon: MuscleImg,
            name: target,
        },
        {
            icon: EquimpmentImg,
            name: equipment,
        },
    ];

    return (
        <Stack
            gap={"60px"}
            sx={{
                flexDirection: { lg: "row" },
                p: "20px",
                alignItems: "center",
            }}
        >
            <img
                src={gifUrl}
                alt={name}
                loading="lazy"
                className="detail-image"
            />
            <Button
                style={{ width: "30px", height: "30px", alignItems: "center" }}
                onClick={(e) => {
                    if (isFavorite) {
                        removeFromFavorites(id);
                    } else {
                        addToFavorites(id);
                    }
                }}
            >
                {isFavorite ? (
                    <img src={Favorite} alt="Favorite" className="heart" />
                ) : (
                    <img src={NotFavorite} alt="" className="heart" />
                )}
            </Button>
            <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
                <Typography
                    sx={{ fontSize: { lg: "64px", xs: "30px" } }}
                    fontWeight={700}
                    textTransform={"capitalize"}
                >
                    {name}
                </Typography>
                <Typography
                    sx={{ fontSize: { lg: "24px", xs: "18px" } }}
                    color="#4F4C4C"
                >
                    {" "}
                    Exercises keep you strong.{" "}
                    <span style={{ textTransform: "capitalize" }}>
                        {name}
                    </span>{" "}
                    is one of the best exercises to target your {target}. It
                    will help you improve your mood and gain energy.
                </Typography>

                {extraDetail.map((item) => (
                    <Stack
                        key={item.name}
                        direction={"row"}
                        gap={"24px"}
                        alignItems={"center"}
                    >
                        <Button
                            sx={{
                                background: "#F0EAE1",
                                borderRadius: "50%",
                                width: "100px",
                                height: "100px",
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={bodyPart}
                                style={{ width: "50px", height: "50px" }}
                            />
                        </Button>
                        <Typography
                            textTransform="capitalize"
                            sx={{ fontSize: { lg: "30px", xs: "20px" } }}
                        >
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Detail;
