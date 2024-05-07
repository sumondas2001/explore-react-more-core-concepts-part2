import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  function addTeam() {
    const newTeam = team + 1;
    setTeam(newTeam);
  }
  const removeTeam = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };

  const teamStyle = {
    margin: "25px",
    border: "2px solid yellow",
    padding: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {team} </h3>
      <button onClick={addTeam}>ADD</button>
      <button onClick={removeTeam}>Remove</button>
    </div>
  );
}
