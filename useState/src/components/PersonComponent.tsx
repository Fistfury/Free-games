import { useState } from "react";
import { Person } from "../models/Person";
export const PersonComponent = () => {
  const [person, setPerson] = useState(
    new Person(
      "Jerry",
      37,
      "Jerry.Lidquist@hotmail.com",
      false,
      "Jalla gatan i Malmö"
    )
  );
  const handleClick = () => {
    const changeName = new Person(
      "Jakob",
      44,
      "Jakob@gmail.se",
      true,
      "Stentorpsgatan i Västerås"
    );
    setPerson(changeName);
  };
  return (
    <>
      <h4>{person.name}</h4>
      <p>{person.age}</p>
      <p>{person.email}</p>
      <p>{person.isActive ? "Yes" : "No"}</p>
      <p>{person.address}</p>
      <button onClick={handleClick}>Change Name</button>
    </>
  );
};
