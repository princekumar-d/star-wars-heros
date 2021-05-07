import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import { Character } from '../../Interfaces/Character';

type CharacterDetailsProps = {
  characterID?: string;
};

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  characterID,
}: CharacterDetailsProps) => {
  const [character, setCharacter] = useState<null | Character>(null);
  useEffect(() => {
    if (characterID) {
      fetch(`https://swapi.dev/api/people/${characterID}`)
        .then((response) => response.json())
        .then((response) => {
          setCharacter(response);
        });
    } else {
      setCharacter(null);
    }
  }, [characterID]);
  return (
    <div className={style.characterDetails} data-testid="characterDetails">
      {character ? (
        <div>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>
                  <h3 className={style.resultHeading}>{character.name}</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={style.property}>Gender</td>
                <td className={style.value}>{character.gender}</td>
              </tr>
              <tr>
                <td className={style.property}>Birth Year</td>
                <td className={style.value}>{character.birth_year}</td>
              </tr>
              <tr>
                <td className={style.property}>Height</td>
                <td className={style.value}>{character.height}</td>
              </tr>
              <tr>
                <td className={style.property}>Mass</td>
                <td className={style.value}>{character.mass}</td>
              </tr>
              <tr>
                <td className={style.property}>Hair Color</td>
                <td className={style.value}>{character.hair_color}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};
