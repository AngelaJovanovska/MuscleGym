import { Box } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { WorkoutsDetail } from "./pages/WorkoutsDetail";
function App(props) {
    const [favoriteExerciseIds, setFavoriteExercieIds] = useState(
        props.initFavorites || []
    );
    const [exercises, setExercises] = useState([]);

    const addToFavorites = (exerciseId) => {
        const newFavorites = [...favoriteExerciseIds, exerciseId];
        setFavoriteExercieIds(newFavorites);
        localStorage.setItem("fav", JSON.stringify(newFavorites));
    };
    const removeFromFavorites = (exerciseId) => {
        const newFavorites = favoriteExerciseIds.filter(
            (fav) => fav !== exerciseId
        );
        setFavoriteExercieIds(newFavorites);
        localStorage.setItem("fav", JSON.stringify(newFavorites));
    };

    return (
        <Box width={"400px"} sx={{ width: { xl: "1448px" } }} m={"auto "}>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            exercises={exercises}
                            setExercises={setExercises}
                            addToFavorites={addToFavorites}
                            removeFromFavorites={removeFromFavorites}
                            favoriteExerciseIds={favoriteExerciseIds}
                        />
                    }
                />
                <Route
                    path="/exercise/:id"
                    element={
                        <WorkoutsDetail
                            addToFavorites={addToFavorites}
                            removeFromFavorites={removeFromFavorites}
                            favoriteExerciseIds={favoriteExerciseIds}
                        />
                    }
                />
                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            exercises={exercises}
                            setExercises={setExercises}
                            addToFavorites={addToFavorites}
                            removeFromFavorites={removeFromFavorites}
                            favoriteExerciseIds={favoriteExerciseIds}
                        />
                    }
                />
            </Routes>
        </Box>
    );
}

export default App;
