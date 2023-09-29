import { Box } from "@mui/material";
import React, { useState } from "react";
import Banner from "../components/Banner";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";

export const Home = ({
    setExercises,
    exercises,
    favoriteExerciseIds,
    addToFavorites,
    removeFromFavorites,
}) => {
    // const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState("all");

    return (
        <Box>
            <Banner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                exercises={exercises}
                setExercises={setExercises}
                bodyPart={bodyPart}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                favoriteExerciseIds={favoriteExerciseIds}
            />
        </Box>
    );
};
