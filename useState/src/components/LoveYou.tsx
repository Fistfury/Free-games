import { Love } from "../models/Love";

interface ILoveYouProps {
    tellingLove: Love;
}

export const LoveYou = (props: ILoveYouProps) => {
    
    return <>
    <h1>Du är min kvinna!🧑‍❤️‍💋‍🧑🏻</h1>
    <h3>{props.tellingLove.love}</h3>
    <p>Hur många år ska jag älska dig? <h2>{props.tellingLove.length}</h2>Minst!</p>
   <div>Om jag älskar dig? <h2><input type = "checkbox" checked =  {props.tellingLove.loveDeclaration} /></h2> ❤️Säger sig själv!❤️</div> <br></br>
    </>
}