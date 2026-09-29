import Image from "next/image";

type DisplayEndProps ={
    restart:() => void;
};

export default function DisplayEnd({ restart }: DisplayEndProps){
    return(
    <div data-testied="song_end">
        <h2>All song are done!</h2>
        <p>Drunk already?</p>
        <Image
        src="/drunk_crayfish.jpg"
        alt="A drunk crayfish"
        width={300}
        height={300}
         />
         <button onClick={restart}>Back to start</button>
    </div>
     )
}