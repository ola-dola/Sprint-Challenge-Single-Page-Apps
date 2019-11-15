import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log(error.message);
        });
  }, []);

  return (
    <section className="character-list">
      <h2>Ricky Morty Characters</h2>
      <div className="flex" >
        {
          characters.map(character => {
            return <CharacterCard character={character} />;
          })
        }
      </div>
    </section>
  );
}
