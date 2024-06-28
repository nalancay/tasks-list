import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "..";

describe("Home Test", () => {
  const TestComponent = () => (
    <Router>
      <Home />
    </Router>
  );

  test("should render navigation buttons in 'tasks' and 'list' ", () => {
    render(<TestComponent />);
    const tasksButton = screen.getByText(/TASKS/i);
    const listButton = screen.getByText(/LIST/i);
    expect(tasksButton).toBeInTheDocument();
    expect(listButton).toBeInTheDocument();
  });
});
