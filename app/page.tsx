"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Menu from "./components/Menu";
import DisplayEnd  from "./components/DisplayEnd";
import { songList } from "./data/songlist";
import { shuffleSongs } from "./utils/shuffleSongs";
import { songType } from "./types/songType";
import DisplaySong from "./components/DisplaySong";



export default function Home(){
    const [page, setPage ] = useState<"start" | "song" | "end">("start");
    const [currentList, setCurrentList] = useState<songType[]>([]);
    const [songIndex, setSongIndex] = useState(0);
    const [isFromMenu, setIsFromMenu]= useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const startDrinking = () => {
        const shuffled = shuffleSongs(songList) ?? songList;
        setCurrentList(shuffled);
        setSongIndex(0);
        setIsFromMenu(false);
        setPage("song");
    };

const nextSong = () => {
    if(songIndex + 1 < currentList.length){
        setSongIndex(songIndex + 1);
    }else{
        setPage("end");
    }
};

const restart = () => {
    setPage("start");
    setIsFromMenu(false);
    setIsMenuOpen(false);
};

const selectSong= (song: songType) => {
    setCurrentList([song]);
    setSongIndex(0);
    setIsFromMenu(true);
    setPage("song");
    setIsMenuOpen(false);
}

return(
    <>
    <Header handleMenu={() => setIsMenuOpen(true)} restart={restart} />
        <Menu
        isOpen={isMenuOpen}
        handleClose={() => setIsMenuOpen(false)}
        selectedMenu={selectSong}
        />

        <main>
            {page === "start" && (
                <section>
                    <h2>Ready for some snaps?</h2>
                    <Image
                    data-testid="home-image"
                    src="/crayfish.jpg"
                    alt="A crayfish"
                    width={400}
                    height={400}
                     />
                     <button onClick={startDrinking}>Start drinking!</button>
                </section>
            )}

            {page ==="song" && (
                <DisplaySong
                handleClick={nextSong}
                SongIndex={songIndex}
                thisSongList={currentList}
                restart={restart}
                isFromMenu={isFromMenu}
                 />
            )}

            {page ==="end" && <DisplayEnd restart={restart} />}
        </main>
    </>
)
}