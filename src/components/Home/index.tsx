import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const buttonStyles = {
    m: 1,
    width: { xs: "80%", md: "20%" },
    padding: "10px",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.black,
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Button
        variant="outlined"
        onClick={() => navigate("/tasks")}
        sx={buttonStyles}
      >
        Tasks
      </Button>
      <Button
        variant="outlined"
        onClick={() => navigate("/list")}
        sx={buttonStyles}
      >
        List
      </Button>
    </Box>
  );
};
