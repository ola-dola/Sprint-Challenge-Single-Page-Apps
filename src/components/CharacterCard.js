import React from "react";

export default function CharacterCard({ character }) {
  
  return (
    <div key={character.id}>
      <img src={character.image} />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Location: {character.location.name}</p>
      <p>Location: {character.origin.name}</p>
      <p>Number of Episodes: `${character.episode.length} episodes`</p>
    </div>
  );
}
