import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders test name", () => {
  render(<App />);
  const linkElement = screen.getByText(/rapidtest/i);
  expect(linkElement).toBeInTheDocument();
});
