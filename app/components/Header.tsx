type HeaderProps = {
    handleMenu:() => void;
    restart:() => void;
}

export default function Header({ handleMenu,restart }: HeaderProps){
    return(
        <header>
            <button
            data-testid="menu-button"
            aria-label="Open menu"
            onClick={handleMenu}>
                ☰
            </button>
            <h1 onClick={restart}>Snapsvisor </h1>
            <h2>Which song will we drink to next?</h2> 
        </header>
    )
}