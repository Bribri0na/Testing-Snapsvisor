import Image from "next/image";
import { X } from "lucide-react";

import { songList } from "../data/songlist";
import { songType } from "../types/songType";

type MenuProps = {
handleClose: () => void;
selectedMenu:( song: songType ) => void;
isOpen: boolean;
}


export default function Menu({ handleClose, selectedMenu, isOpen }: MenuProps){
    return(
        <aside
        data-testid="sidebar"
        aria-hidden={isOpen ? "false" :"true"}
        className={ `fixed top-0 left-0 h-full w-73 bg-white p-6 shadow-lg trandition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
            <button 
            onClick={handleClose}
            aria-label="Close menu"
            className="self-end text-navy">
                <X className="h-8 w-8" />
            </button>

            <p className="mb-4 font-heading text-2xl text-snaps-red md:text-3xl">
                Snaps Song List
            </p>

            <ul className="flex flex-col gap-1">
                {songList.map((song)=>(
                    <li key={song.id}>
                        <button data-testid="song"  onClick={() => selectedMenu(song)}
                            className="w-full py-2 text-left font-heading text-lg hover:text-snaps-red">
                            {song.song}
                        </button>                   
                    </li>
                ))}
            </ul>

            <Image
            data-testid="Sidebar-crayfish"
            src="/sidebar-crayfish.png"
            alt="Caryfish"
            width={200}
            height={200}
            className="mt-auto self-end"
            />
        </aside>
    )
}
