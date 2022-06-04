import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders remove books button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/удалить все книги/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders add books button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/пополнить библиотеку/i);
  expect(buttonElement).toBeInTheDocument();
});
