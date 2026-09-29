import NextButton from "./NextButton";
import { songType } from "../types/songType"

type DisplaySongProps ={
    handleClick:() => void;
    SongIndex:number;
    thisSongList: songType[];
    restart:() => void;
    isFromMenu:boolean;
}

export default function DisplaySong({
    handleClick,
    SongIndex,
    thisSongList,
    restart,
    isFromMenu,
}: DisplaySongProps){
    const currentSong = thisSongList[SongIndex];
    

    return(
        <section>
            {!isFromMenu && (
                <p data-testid="song_number">
                    {SongIndex + 1} / {thisSongList.length}
                </p>
            )}

            <h2 data-testid="song_name">{currentSong.song}</h2>
            <p data-testid="song_melody">Melody: {currentSong.melody}</p>
            <p data-testid="song_lyric" className="whitespace-pre-line">
                {currentSong.lyric}
            </p>

            {!isFromMenu && <NextButton handleClick={handleClick} />}
            <button onClick={restart}>Back to start </button>
        </section>
    )
}