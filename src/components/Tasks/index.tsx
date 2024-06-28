import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addTask } from "../../redux/taskSlice";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Divider,
  useTheme,
} from "@mui/material";

export const Tasks: React.FC = () => {
  const theme = useTheme();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      dispatch(addTask(taskDescription));
      setTaskDescription("");
      setErrorMessage("");
      setOpen(false);
    } else {
      setErrorMessage("Ingrese un texto.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      marginTop="30px"
    >
      <Button
        variant="outlined"
        onClick={() => setOpen(true)}
        sx={{
          m: 1,
          width: { xs: "80%", md: "20%" },
          padding: "10px",
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.common.black,
        }}
      >
        New Task
      </Button>
      <List sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
        {tasks.map((task, index) => (
          <React.Fragment key={task.id}>
            <ListItem key={task.id}>
              <ListItemText primary={task.description} />
            </ListItem>
            {index < tasks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Agregar Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Descripción"
            type="text"
            fullWidth
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            error={!!errorMessage}
            helperText={errorMessage}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handleAddTask}>Agregar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
