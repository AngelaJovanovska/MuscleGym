import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowIcon from "../assets/icons/left.png";
import RightArrowIcon from "../assets/icons/right.png";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()}>
            <img src={LeftArrowIcon} alt="" className="left" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollNext()}>
            <img src={RightArrowIcon} alt="" className="right" />
        </Typography>
    );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    margin={"0 40px"}
                >
                    {isBodyParts ? (
                        <BodyPart
                            item={item}
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart}
                        />
                    ) : (
                        <ExerciseCard exercise={item} />
                    )}
                </Box>
            ))}
        </ScrollMenu>
    );
};

export default HorizontalScrollbar;
