import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import { Character } from '../../Interfaces/Character';
import { Link } from 'react-router-dom';
import { Button } from '../Atoms/Button';

type ResultsProps = {
  searchKey?: string | null | undefined;
};

interface SearchResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
}

export const CharacterResults: React.FC<ResultsProps> = ({
  searchKey,
}: ResultsProps) => {
  const [searchResponse, setSearchResponse] = useState<SearchResponse | null>(
    null
  );
  const [pageNumber, setPageNumber] = useState<string | null | undefined>(null);
  useEffect(() => {
    if (searchKey && searchKey.length >= 1) {
      fetch(
        `https://swapi.dev/api/people/?search=${searchKey}${
          pageNumber ? '&page=' + pageNumber : ''
        }`
      )
        .then((response) => response.json())
        .then((response) => {
          setSearchResponse(response);
        });
    } else {
      setSearchResponse(null);
    }
  }, [searchKey, pageNumber]);
  return (
    <div className={style.characterResults} data-testid="characterResults">
      {searchResponse &&
      searchResponse.results &&
      searchResponse.results.length > 0 ? (
        <div>
          <p className={style.resultIndicator}>
            {searchResponse.count} results found for &quot;{searchKey}&quot;
          </p>
          <ul>
            {searchResponse.results.map(
              (character: Character, index: number) => {
                const id = character.url.match(/\/(\d+)+[\/]?/);
                return (
                  <li className={style.resultItem} key={index}>
                    <Link
                      className={style.itemLink}
                      to={`/character/${id && id[1]}`}
                    >
                      {character.name}
                      <span className={style.metaData}>
                        Last Modified: {character.edited}
                      </span>
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
          <div className={style.pagination}>
            <Button
              onClick={() =>
                setPageNumber(
                  new URLSearchParams(searchResponse.previous).get('page')
                )
              }
              disabled={!searchResponse.previous}
              type="button"
            >
              Previous
            </Button>

            <Button
              onClick={() =>
                setPageNumber(
                  new URLSearchParams(searchResponse.next).get('page')
                )
              }
              type="button"
              disabled={!searchResponse.next}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
