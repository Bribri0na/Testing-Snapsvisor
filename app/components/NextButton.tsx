type NextButtonProps = {
    handleClick:() => void;

}

export default function Nextbutton ({ handleClick }: NextButtonProps){
    return(
        <button data-testid="next_button" onClick={handleClick}>
            Next song!
        </button>
    )
}