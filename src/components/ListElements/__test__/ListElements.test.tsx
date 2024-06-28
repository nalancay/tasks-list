import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { ListElements } from "..";
import ApiElements from "../../../services/elements";

jest.mock("../../../services/elements", () => ({
  getElements: jest.fn(),
}));

describe("ListElements Test", () => {
  const mockElements = [
    { id: "1", name: "Element 1", avatar: "avatar1.jpg" },
    { id: "2", name: "Element 2", avatar: "avatar2.jpg" },
  ];

  beforeEach(() => {
    (ApiElements.getElements as jest.Mock).mockResolvedValue(mockElements);
  });

  const TestComponent = () => (
    <Router>
      <ListElements />
    </Router>
  );

  test("It should show 'loading' status initially", () => {
    render(<TestComponent />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("Should show a list of items after loading", async () => {
    render(<TestComponent />);

    await waitFor(() => {
      expect(screen.getByText("Element 1")).toBeInTheDocument();
      expect(screen.getByText("Element 2")).toBeInTheDocument();
    });
  });
});
