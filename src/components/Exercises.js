import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({
    exercises,
    setExercises,
    bodyPart,
    favoriteExerciseIds,
    addToFavorites,
    removeFromFavorites,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(
        indexOfFirstExercise,
        indexOfLastExercise
    );

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1080, behavior: "smooth" });
    };
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exerciseData = [];
            if (bodyPart === "all") {
                exerciseData = await fetchData(
                    "https://exercisedb.p.rapidapi.com/exercises",
                    exerciseOptions
                );
            } else {
                exerciseData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions
                );
                // console.log(exerciseData);
            }
            setExercises(exerciseData);
        };
        fetchExercisesData();
    }, [bodyPart, setExercises]);

    return (
        <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="46px"
            >
                Showing Exercises
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { lg: "107px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center"
            >
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard
                        key={index}
                        exercise={exercise}
                        addToFavorites={addToFavorites}
                        removeFromFavorites={removeFromFavorites}
                        isFavorite={favoriteExerciseIds.find(
                            (fe) => fe === exercise.id
                        )}
                        showFavorite={true}
                    />
                ))}
            </Stack>
            <Stack mt={"100px"} alignItems={"center"}>
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
