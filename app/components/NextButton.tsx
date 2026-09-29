import { Wine } from "lucide-react";

type NextButtonProps = {
    handleClick:() => void;
}

export default function Nextbutton ({ handleClick }: NextButtonProps){
    return(
        <button data-testid="next_button" onClick={handleClick}
        className="flex w-full max-w-xs items-center justify-center">
            Next song!
            <Wine className="h-6 w-6" />
        </button>
    )
}