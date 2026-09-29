import NextButton from "./NextButton";
import { songType } from "../types/songType";
import { RefreshCw } from "lucide-react";

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
        <section className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 px-4 py-8 text-center md:py-12">
            {!isFromMenu && (
                <p data-testid="song_number"
                className="round-full bg-snap-red px-4 py-1 font-heading text-white">
                    {SongIndex + 1} / {thisSongList.length}
                </p>
            )}
            <div>
            <h2 data-testid="song_name">{currentSong.song}</h2>
            <p data-testid="song_melody">Melody: {currentSong.melody}</p>
            <p data-testid="song_lyric" className="whitespace-pre-line">
                {currentSong.lyric}
            </p>
            </div>

            <div className="relative w-full rounded-2xl border-2 border-lyric-yellow px-6 pb-8 pt-10">
                <span className="absolute -top-4 left-6 rounded-full bg-lyric-yellow px-4 py-1 font-heading">
                    Lyric
                </span>
                <p date-testid="song_lyric" className="whitespace-pre-line leading-8 md;text-lg">
                    {currentSong.lyric}
                </p>
            </div>

            {!isFromMenu && <NextButton handleClick={handleClick} />}
            <button 
            onClick={restart}
            className="flex items-center gap-2 font-heading text-lg hover:underline">
                Back to start 
            </button>
        </section>
    )
}