import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "@/app/components/Menu";
import { songList } from "@/app/data/songlist";

describe("Menu events", () => {
    test("clicking a song title calls selectedMenu with that song", () => {
        const mockSelectedMenu = jest.fn();

        render(
            <Menu handleClose={jest.fn()} selectedMenu={mockSelectedMenu} isOpen={true} />
        );

        const songButton = screen.getByRole("button", { name: songList[1].song});
        fireEvent.click(songButton)
        
        expect(mockSelectedMenu).toHaveBeenCalledTimes(1);
        expect(mockSelectedMenu).toHaveBeenCalledWith(songList[1])
    });

    test("clicking the close button calls handleClose", () => {
        const mockHandleClose = jest.fn();
        render(
            <Menu handleClose={mockHandleClose} selectedMenu={jest.fn()} isOpen={true} />,
        )
        fireEvent.click(screen.getByRole("button",{ name:/close menu/i }))
        
        expect(mockHandleClose).toHaveBeenCalledTimes(1);
    })

    test("the menu is hidden when isOpen si false", () => {
        render(
            <Menu handleClose={jest.fn()} selectedMenu={jest.fn()} isOpen={false} />,
             )

            expect(screen.getByTestId("sidebar")).toHaveAttribute("aria-hidden", "true");
            expect(screen.queryByRole("button",{ name: /close menu/i}))      
    })
})