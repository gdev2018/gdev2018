import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("select repeat", () => {
  render(<App />);
  const selectElement = screen.getByText("repeat");
  expect(selectElement).toBeInTheDocument();
});
