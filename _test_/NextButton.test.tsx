import { render, screen } from "@testing-library/react";
import NextButton from "@/app/components/NextButton";

const mockFunction = jest.fn();

describe("Next button shows text", () => {
  test("Next button shows text", () => {
    render(<NextButton handleClick={mockFunction} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
