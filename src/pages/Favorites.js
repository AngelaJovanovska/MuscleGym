import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ExerciseCard from "../components/ExerciseCard";

export const Favorites = ({
    addToFavorites,
    exercises,
    removeFromFavorites,
    favoriteExerciseIds,
}) => {
    const favoriteExercises = exercises.filter((exercise) =>
        favoriteExerciseIds.includes(exercise.id)
    );
    return (
        <Box sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="46px"
            >
                Favorites
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { lg: "107px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {favoriteExercises.map((exercise) => (
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        addToFavorites={addToFavorites}
                        removeFromFavorites={removeFromFavorites}
                        isFavorite={favoriteExerciseIds.includes(exercise.id)}
                        showFavorite={true}
                    />
                ))}
            </Stack>
        </Box>
    );
};
