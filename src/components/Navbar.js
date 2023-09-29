import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../assets/images/Logo1.png";

const Navbar = () => {
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            gap="20px"
            fontFamily="monospace"
            fontSize={{ xs: "18px", sm: "24px" }}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "center", sm: "space-between" }}
            sx={{
                mt: { xs: "10px", sm: "12px" },
                px: "20px",
                marginRight: { xs: "0", sm: "100px" },
            }}
        >
            <Link to="/">
                <img
                    src={Logo1}
                    alt="logo"
                    style={{
                        width: "120px",
                        height: "120px",
                        margin: "0px 20px",
                    }}
                />
            </Link>
            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: "#000",
                    animation: "ease-in-out",
                }}
                onMouseOver={(e) =>
                    (e.target.style.borderBottom = "3px solid grey")
                }
                onMouseOut={(e) =>
                    (e.target.style.borderBottom = "3px solid transparent")
                }
            >
                Home
            </Link>
            <a
                href="#exercises"
                style={{
                    textDecoration: "none",
                    color: "#000",
                    animation: "ease-in-out",
                }}
                onMouseOver={(e) =>
                    (e.target.style.borderBottom = "3px solid grey")
                }
                onMouseOut={(e) =>
                    (e.target.style.borderBottom = "3px solid transparent")
                }
            >
                Exercises
            </a>
            <Link
                to="/favorites"
                style={{
                    textDecoration: "none",
                    color: "#000",
                    animation: "ease-in-out",
                }}
                onMouseOver={(e) =>
                    (e.target.style.borderBottom = "3px solid grey")
                }
                onMouseOut={(e) =>
                    (e.target.style.borderBottom = "3px solid transparent")
                }
            >
                Favorites
            </Link>
        </Stack>
    );
};

export default Navbar;
