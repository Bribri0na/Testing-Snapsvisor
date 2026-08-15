import { fireEvent, render, screen, within } from "@testing-library/react";
import Home from "@/app/page";
import { songList } from "@/app/data/songlist";

describe("Top page has contents", () => {
  test("Thats home renders with an H2 and specific text", () => {
    render(<Home />);
    const pageTitle = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageTitle).toBeInTheDocument();
  });

  test("It render an image", () => {
    render(<Home />);
    const foundImage = screen.getByTestId("home-image");
    expect(foundImage).toBeInTheDocument();
    expect(foundImage.getAttribute("src")).toContain("crayfish.jpg");
  });

  //From the start button//
  test("The user can go to the first song page from start button", () => {
    render(<Home />);
    const startButton = screen.getByRole("button", {
      name: /Start drinking!/i,
    });

    fireEvent.click(startButton);

    const main = screen.getByRole("main");
    const songNumber = screen.queryByTestId("song_number");
    const firstSong = within(main).queryByRole("heading", { level: 2 });
    const songName = songList.map((song) => song.song);
    const songMelody = screen.queryByTestId("song_melody");
    const songLylic = screen.queryByTestId("song_lyric");

    expect(songNumber).toBeInTheDocument();
    expect(firstSong).toBeInTheDocument();
    expect(songMelody).toBeInTheDocument();
    expect(songLylic).toBeInTheDocument();

    expect(songNumber).toHaveTextContent("1 / 10"); //count first?
    expect(songName).toContain(firstSong?.textContent); //render first song?
  });

  test("The next song is not same as first one", () => {
    render(<Home />);
    const startButton = screen.getByRole("button", {
      name: /Start drinking!/i,
    });

    fireEvent.click(startButton);

    const main = screen.getByRole("main");
    const firstSong = within(main).queryByRole("heading", { level: 2 });
    const firstSongName = firstSong?.textContent;
    const nextButton = screen.getByTestId("next_button");

    fireEvent.click(nextButton);

    const secondSong = within(main).getByRole("heading", { level: 2 });
    const songNumber = screen.queryByTestId("song_number");

    expect(songNumber).toHaveTextContent("2 / 10");
    expect(secondSong.textContent).not.toBe(firstSongName);
  });

  test("The user can return to the start page from song page", () => {
    render(<Home />);
    const startButton = screen.getByRole("button", {
      name: /Start drinking!/i,
    });
    fireEvent.click(startButton);

    const restartButton = screen.getByRole("button", {
      name: /back to start/i,
    });
    fireEvent.click(restartButton);

    const startPage = screen.getByRole("heading", {
      name: /ready for some snaps/i,
    });

    expect(startPage).toBeInTheDocument(); //render start page?
  });

  test("The song number increases when next buttan is clicked", () => {
    render(<Home />);
    const startButton = screen.getByRole("button", {
      name: /Start drinking!/i,
    });
    fireEvent.click(startButton);

    for (let i = 1; i <= songList.length; i++) {
      const songNumber = screen.queryByTestId("song_number");
      expect(songNumber).toHaveTextContent(`${i} / 10`);

      if (i < songList.length) {
        const nextButton = screen.getByTestId("next_button");
        fireEvent.click(nextButton);
      }
    }
  });

  test("After the last song, end page will be rendered", () => {
    render(<Home />);
    const startButton = screen.getByRole("button", {
      name: /Start drinking!/i,
    });
    fireEvent.click(startButton);

    for (let i = 1; i <= songList.length; i++) {
      const songNumber = screen.queryByTestId("song_number");
      expect(songNumber).toHaveTextContent(`${i} / 10`);

      if (i < songList.length) {
        const nextButton = screen.getByTestId("next_button");
        fireEvent.click(nextButton);
      }

      if ((i = songList.length)) return;
    }

    const pageContent = screen.getByTestId("song_end");
    expect(pageContent).toHaveTextContent(/All songs are done!/i);
  });

  test("Each songs will be rendered", () => {
    render(<Home />);
    const startButton = screen.getByRole("button", {
      name: /Start drinking!/i,
    });

    fireEvent.click(startButton);

    const songNameList: string[] = [];

    for (let i = 0; i < songList.length; i++) {
      const main = screen.getByRole("main");

      const songName = within(main).getByTestId("song_name");

      songNameList.push(songName.textContent ?? "");

      if (i < songList.length - 1) {
        fireEvent.click(screen.getByTestId("next_button"));
      }
    }

    expect(songNameList).toEqual(
      expect.arrayContaining(songList.map((song) => song.song)),
    );
  });

  test("songs order will be rendered randomely", () => {
    render(<Home />);

    let songName = "";

    for (let i = 0; i < 10; i++) {
      const startButton = screen.getByRole("button", {
        name: /Start drinking!/i,
      });

      fireEvent.click(startButton);

      songName = screen.getByTestId("song_name").textContent ?? "";

      const restartButton = screen.getByRole("button", {
        name: /back to start/i,
      });

      fireEvent.click(restartButton);

      if (songName !== songList[0].song) {
        break;
      }
      expect(songName).not.toBe(songList[0].song);
    }
  });

  //From Menu//

  test("Opens sidebar", () => {
    render(<Home />);
    const sidebar = screen.getByTestId("sidebar");
    const menuButton = screen.getByTestId("menu-button");
    expect(sidebar).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(menuButton);

    expect(sidebar).toHaveAttribute("aria-hidden", "false");
  });

  test("User can go to the specify song page from menu", () => {
    render(<Home />);
    const sidebar = screen.getByTestId("sidebar");
    const menuButton = screen.getByTestId("menu-button");
    expect(sidebar).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(menuButton);

    const firstSong = screen.getByText(/Helan går/i);

    fireEvent.click(firstSong);

    const main = screen.getByRole("main");
    const songName = within(main).getByRole("heading", { level: 2 });

    expect(songName).toHaveTextContent(/Helan går/i);
  });

  test("The song page which is acceced from menu does not have number and next button", () => {
    render(<Home />);
    const sidebar = screen.getByTestId("sidebar");
    const menuButton = screen.getByTestId("menu-button");
    expect(sidebar).toHaveAttribute("aria-hidden", "true");

    fireEvent.click(menuButton);

    const firstSong = screen.getByText(/Helan går/i);

    fireEvent.click(firstSong);

    const songNumber = screen.queryByTestId("song_number");
    const nextButton = screen.queryByTestId("next_button");
    expect(songNumber).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });
});
