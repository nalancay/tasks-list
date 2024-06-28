import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { store } from "../../../redux/store";
import { Tasks } from "..";

describe("Tasks Test", () => {
  const TestComponent = () => (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );

  test("It should show a list of 7 'tasks' that come from the redux context", () => {
    render(<TestComponent />);

    const initialTasks = screen.getAllByRole("listitem");
    expect(initialTasks.length).toBe(7);
  });

  test("You should add a new task in the redux context and it should show 'task element 8'", async () => {
    render(<TestComponent />);
    await waitFor(() => {
      const newTaskButton = screen.getByText("New Task");
      fireEvent.click(newTaskButton);
    });

    const inputField = screen.getByLabelText("Descripción");
    const addButton = screen.getByText("Agregar");

    fireEvent.change(inputField, { target: { value: "task element 8" } });
    fireEvent.click(addButton);

    await waitFor(() => {
      const updatedTasks = screen.getAllByRole("listitem");
      expect(updatedTasks.length).toBe(8);
      expect(screen.getByText("task element 8")).toBeInTheDocument();
    });
  });

  test("It should show an error message if you do not enter text in the description", async () => {
    render(<TestComponent />);
    await waitFor(() => {
      const newTaskButton = screen.getByText("New Task");
      fireEvent.click(newTaskButton);
    });

    const addButton = screen.getByText("Agregar");
    fireEvent.click(addButton);
    expect(screen.getByText("Ingrese un texto.")).toBeInTheDocument();
  });
});
