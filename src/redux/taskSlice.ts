import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  description: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    { id: 1, description: "task element 1" },
    { id: 2, description: "task element 2" },
    { id: 3, description: "task element 3" },
    { id: 4, description: "task element 4" },
    { id: 5, description: "task element 5" },
    { id: 6, description: "task element 6" },
    { id: 7, description: "task element 7" },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = { id: Date.now(), description: action.payload };
      state.tasks.push(newTask);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
