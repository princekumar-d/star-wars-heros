import React, { SyntheticEvent, useState } from 'react';
import style from './style.module.css';
import { Character } from '../../Interfaces/Character';
import { Link } from 'react-router-dom';

import { TextBox } from '../Atoms/Textbox';
import { Button } from '../Atoms/Button';
import SearchIcon from '../../Images/loupe.svg';

export const CharacterSearch: React.FC = () => {
  const [characters, setCharacters] = useState([]);
  const suggestCharacters = (event: SyntheticEvent) => {
    const target = event.currentTarget as HTMLInputElement;
    const suggestionKey = target.value;
    // fetches the value from swapi based on the input value and populates in suggestions
    if (suggestionKey.length >= 1) {
      fetch(`https://swapi.dev/api/people/?search=${suggestionKey}`)
        .then((response) => response.json())
        .then((response) => {
          setCharacters(response.results);
        });
    } else {
      setCharacters([]);
    }
  };
  return (
    <div className={style.characterSearch} data-testid="characterSearch">
      <form action="/search" method="GET">
        <div className={style.formWrapper}>
          <div className={style.fieldWrapper}>
            <TextBox
              id="characterName"
              name="searchKey"
              placeholder="SEARCH STAR WARS CHARACTERS"
              onChange={suggestCharacters}
            />
          </div>
          <div className={style.buttonWrapper}>
            <Button type="submit">
              <span className={style.buttonText}>
                <img src={SearchIcon} alt="search" />
                Search
              </span>
            </Button>
          </div>
        </div>
      </form>
      {/* Suggestions block */}
      {characters && characters.length > 0 ? (
        <ol className={style.suggestions}>
          {characters.map((character: Character, index: number) => {
            const id = character.url.match(/\/(\d+)+[\/]?/);
            return (
              <li className={style.suggestionItem} key={index}>
                <Link
                  className={style.itemLink}
                  to={`/character/${id && id[1]}`}
                  onClick={() => setCharacters([])}
                >
                  {character.name}
                </Link>
              </li>
            );
          })}
        </ol>
      ) : null}
    </div>
  );
};
