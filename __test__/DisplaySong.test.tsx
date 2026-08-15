import { fireEvent, render, screen } from "@testing-library/react";
import DisplaySong from "@/app/components/DisplaySong.tsx";

const mockNext = jest.fn();
const mockRestart = jest.fn();
const songIndexMock = 0;
const songListMock = [
  {
    id: 0,
    song: "mock song",
    lyric: "hej hej ho",
    melody: "Blinks lilla stjärna",
    youtube: "",
  },
];
const mockIsFromMenu = false;

describe("Shows lists", () => {
  test("The button calls handleClick", () => {
    render(
      <DisplaySong
        handleClick={mockNext}
        SongIndex={songIndexMock}
        thisSongList={songListMock}
        restart={mockRestart}
        isFromMenu={mockIsFromMenu}
      />,
    );
    const button = screen.getByRole("button", { name: /Next song!/i });
    fireEvent.click(button);
    expect(mockNext).toHaveBeenCalled();
  });

  test("The second button calls resuart", () => {
    render(
      <DisplaySong
        handleClick={mockNext}
        SongIndex={songIndexMock}
        thisSongList={songListMock}
        restart={mockRestart}
        isFromMenu={mockIsFromMenu}
      />,
    );
    const button = screen.getByRole("button", { name: /Back to start/i });
    fireEvent.click(button);
    expect(mockRestart).toHaveBeenCalled();
  });
});
