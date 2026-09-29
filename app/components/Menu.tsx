import Image from "next/image";

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
            <button onClick={handleClose}>Close</button>

            <ul>
                {songList.map((song)=>(
                    <li key={song.id}>
                        <button data-testid="song"  onClick={() => selectedMenu(song)}>
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

            />
        </aside>
    )
}
