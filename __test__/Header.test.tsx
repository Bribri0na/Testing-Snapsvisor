import { render, screen } from "@testing-library/react";
import Header from "@/app/components/Header";

const mockHandleMenu = jest.fn();
const mockRestart = jest.fn();

describe("The header works ok", () => {
  test("Thats the header renders with an H1 and specific text", () => {
    render(<Header handleMenu={mockHandleMenu} restart={mockRestart} />);
    const pageTitle = screen.getByRole("heading", {
      level: 1,
    });

    expect(pageTitle).toBeInTheDocument();
  });

  test("Thats the header renders with an H2 and specific text", () => {
    render(<Header handleMenu={mockHandleMenu} restart={mockRestart} />);
    const pageTitle = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageTitle).toHaveTextContent(/Which song will we drink to next?/i);
  });
});
