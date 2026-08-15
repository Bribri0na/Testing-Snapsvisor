import { render, screen, fireEvent } from "@testing-library/react";
import DisplayEnd from "@/app/components/DisplayEnd";

describe("End page shows an image and a button", () => {
  test("It render an image", () => {
    const mockFunction = jest.fn();
    render(<DisplayEnd restart={mockFunction} />);
    const foundImage = screen.getByRole("img");
    expect(foundImage.getAttribute("src")).toContain("drunk_crayfish.jpg");
  });

  test("Rendered the button", () => {
    const mockFunction = jest.fn();
    render(<DisplayEnd restart={mockFunction} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Back to start");
  });

  test("The restart function is called when the button is clicked", () => {
    const mockFunction = jest.fn();
    render(<DisplayEnd restart={mockFunction} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockFunction).toHaveBeenCalled();
  });
});
