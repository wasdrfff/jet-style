import { render, screen } from "@testing-library/react";
import { AddBookForm } from "./index";

test("renders author book label", () => {
  render(<AddBookForm />);
  const labelElement = screen.getByText(/автор книги/i);
  expect(labelElement).toBeInTheDocument();
});
test("renders name book label", () => {
  render(<AddBookForm />);
  const labelElement = screen.getByText(/название книги/i);
  expect(labelElement).toBeInTheDocument();
});
test("renders cover book label", () => {
  render(<AddBookForm />);
  const labelElement = screen.getByText(/обложка книги/i);
  expect(labelElement).toBeInTheDocument();
});
