import { useState } from "react";
import "./App.css";
import { LoveYou } from "./components/LoveYou";
import { Love } from "./models/Love";

function App() {
  const [showLove, setShowLove] = useState(false);
  const love = new Love(
    "Jag älskar dig, älskar dig nu, älskar dig imorgon och tills dagen jag dör. Du är en fantastisk kvinna och jag kan klassa mig lycklig som har funnit dig. Om en vecka så befinner vi någon annanstans, ett annat land. Ett ställe där vi bara kan vara, du o jag. Mysa, mys i överflöd och jag? Jag får se din rumpa i fler vinklar :) ",
    "💯",
    true
  );
  const handleCLick = () => {
    setShowLove(true);
  };
  const removeLove = () => {
    setShowLove(false);
  }

  return (
    <>
      
      {showLove ? (
        <>
          <LoveYou tellingLove={love} />
          <button onClick={removeLove}>Dölj min kärlek😔</button>
        </>
      ) : (
        <>
        <h1>Kajsa💞</h1>
          <button onClick={handleCLick}>Vet du en sak?🙄</button>
        </>
      )}
    </>
  );
}

export default App;
