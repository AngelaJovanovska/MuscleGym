import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExercisesVideo from "../components/ExercisesVideo";
import SimiliarEquipmentExercises from "../components/SimiliarEquipmentExercises";
import SimiliarMuscleExercises from "../components/SimiliarMuscleExercises";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

export const WorkoutsDetail = ({
    favoriteExerciseIds,
    addToFavorites,
    removeFromFavorites,
}) => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const { id } = useParams();

    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeDbUrl =
                "https://youtube-search-and-download.p.rapidapi.com";
            const exerciseDetailData = await fetchData(
                `${exerciseDbUrl}/exercises/exercise/${id}`,
                exerciseOptions
            );
            setExerciseDetail(exerciseDetailData);

            const youtubeVideosData = await fetchData(
                `${youtubeDbUrl}/search?query=${exerciseDetailData.name}`,
                youtubeOptions
            );
            setYoutubeVideos(youtubeVideosData.contents);

            const targetMuscleExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
                exerciseOptions
            );
            setTargetMuscleExercises(targetMuscleExercisesData);

            const targetEquipmentExercisesData = await fetchData(
                `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
                exerciseOptions
            );
            setEquipmentExercises(targetEquipmentExercisesData);
        };
        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail
                exerciseDetail={exerciseDetail}
                favoriteExerciseIds={favoriteExerciseIds}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorite={favoriteExerciseIds.includes(id)}
            />
            <ExercisesVideo
                youtubeVideos={youtubeVideos}
                name={exerciseDetail.name}
            />
            <SimiliarMuscleExercises
                targetMuscleExercises={targetMuscleExercises}
            />
            <SimiliarEquipmentExercises
                equipmentExercises={equipmentExercises}
            />
        </Box>
    );
};
