import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/app/components/Header";


describe("Header events", () => {
    test("the h1 shows the site name", () =>{
        render(<Header handleMenu={jest.fn()} restart={jest.fn()} />);

        expect(screen.getByRole("heading", { level:1 })). toHaveTextContent(/snapsvisor/i)
    })

    test("clicking the menu button calls handleMenu", ()=> {
        const mockHandleMenu = jest.fn();
        render(<Header handleMenu={mockHandleMenu} restart={jest.fn()} />)

        fireEvent.click(screen.getByRole("button", { name: /open menu/i }))

        expect(mockHandleMenu).toHaveBeenCalledTimes(1);
    });
});