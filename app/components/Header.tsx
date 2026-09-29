import { Menu as MenuIcon } from "lucide-react";
    
    type HeaderProps = {
    handleMenu:() => void;
    restart:() => void;
}

export default function Header({ handleMenu,restart }: HeaderProps){
    return(
        <header className="relative bg-navy px-4 py-6 text-center font-heading md:py-8">
            <h1 
            onClick={restart}
            className="mt-2 text-base text-white md:text-2xl">
                Snapsvisor
            </h1>

            <h2
            className="mt-2 text-base text-white md:text-2xl">
                Which song will we drink to next?
            </h2>

            <button
            data-testid="menu-button"
            aria-label="Open menu"
            onClick={handleMenu}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white">
                <MenuIcon className="h-8 w-8 md:h-10 md:w-10" />
            </button>
        </header>
    )
}