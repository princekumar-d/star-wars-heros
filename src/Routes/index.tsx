import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CharacterDetails } from '../Components/CharacterDetails';
import { CharacterResults } from '../Components/CharacterResults';

interface ParamTypes {
  characterID: string;
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const CharacterDetailsRoute: React.FC = () => {
  const { characterID } = useParams<ParamTypes>();
  return <CharacterDetails characterID={characterID} />;
};

export const CharacterResultsRoute: React.FC = () => {
  const searchKey = useQuery().get('searchKey');
  return <CharacterResults searchKey={searchKey} />;
};
