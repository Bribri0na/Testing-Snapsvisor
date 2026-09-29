import Image from "next/image";

type DisplayEndProps ={
    restart:() => void;
};

export default function DisplayEnd({ restart }: DisplayEndProps){
    return(
    <div data-testied="song_end"
    className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-8 text-center md:py-12">
        <h2 className="font-heading text-3xl md:text-5xl">All song are done!</h2>
        <p className="font-heading text-xl md:text-2xl">Drunk already?</p>
        <Image
        src="/drunk_crayfish.jpg"
        alt="A drunk crayfish"
        width={300}
        height={300}
        className="h-auto w-64 md:w-96"
         />
         <button onClick={restart}
         className="w-full max-w-xs rounded-full bg-snaps-red px-8 py-4 font-heading text-white trandition hover:brightness-110">
            Back to start
        </button>
    </div>
     )
}