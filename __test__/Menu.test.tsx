import { render, screen } from "@testing-library/react";
import Menu from "@/app/components/Menu";
import { songList } from "@/app/data/songlist";

const mockHandleClose = jest.fn();
const mockSelectedMenu = jest.fn();
const mockIsOpen = true;

describe("Menu has all song titles and an image", () => {
  test("Shows songlist", () => {
    render(
      <Menu
        handleClose={mockHandleClose}
        selectedMenu={mockSelectedMenu}
        isOpen={mockIsOpen}
      />,
    );
    const menus = screen.getAllByTestId("song");
    expect(menus.length).toBe(songList.length);

    menus.map((menu, index) => {
      expect(menu).toHaveTextContent(songList[index].song);
    });
  });

  test("It render an image", () => {
    render(
      <Menu
        handleClose={mockHandleClose}
        selectedMenu={mockSelectedMenu}
        isOpen={mockIsOpen}
      />,
    );
    const foundImage = screen.getByTestId("Sidebar-crayfish");
    expect(foundImage).toBeInTheDocument();
    expect(foundImage.getAttribute("src")).toContain("sidebar-crayfish.png");
  });
});
