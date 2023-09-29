import { Button, Stack, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import React from "react";
import { Link } from "react-router-dom";
import Favorite from "../assets/icons/AddFav.png";
import NotFavorite from "../assets/icons/RemoveFav.png";

const ExerciseCard = ({
    exercise,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    showFavorite,
}) => {
    return (
        <>
            <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
                <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                <Stack direction="row">
                    <Chip
                        label={exercise.bodyPart}
                        sx={{
                            ml: "21px",
                            color: "#fff",
                            background: "#207F4E",
                            fontSize: "14px",
                            borderRadius: "20px",
                            textTransform: "capitalize",
                        }}
                    ></Chip>
                    <Chip
                        label={exercise.target}
                        sx={{
                            ml: "21px",
                            color: "#fff",
                            background: "orange",
                            fontSize: "14px",
                            borderRadius: "20px",
                            textTransform: "capitalize",
                        }}
                    ></Chip>
                </Stack>
                <Typography
                    ml="21px"
                    color="#000"
                    fontWeight="bold"
                    sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                    mt="11px"
                    pb="10px"
                    textTransform="capitalize"
                >
                    {exercise.name}
                </Typography>
            </Link>
            {showFavorite && (
                <Button
                    style={{
                        width: "30px",
                        height: "30px",
                        alignItems: "center",
                    }}
                    onClick={(e) => {
                        if (isFavorite) {
                            removeFromFavorites(exercise.id);
                        } else {
                            addToFavorites(exercise.id);
                        }
                    }}
                >
                    {isFavorite ? (
                        <img src={Favorite} alt="Favorite" className="heart" />
                    ) : (
                        <img src={NotFavorite} alt="" className="heart" />
                    )}
                </Button>
            )}
        </>
    );
};

export default ExerciseCard;
