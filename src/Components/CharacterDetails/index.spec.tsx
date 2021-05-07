import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import { CharacterDetails } from './index';

const mockSuccessResponse = {
  birth_year: '19 BBY',
  eye_color: 'Blue',
  films: ['https://swapi.dev/api/films/1/'],
  gender: 'Male',
  hair_color: 'Blond',
  height: '172',
  homeworld: 'https://swapi.dev/api/planets/1/',
  mass: '77',
  name: 'Luke Skywalker',
  skin_color: 'Fair',
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-10T13:52:43.172000Z',
  species: ['https://swapi.dev/api/species/1/'],
  starships: ['https://swapi.dev/api/starships/12/'],
  url: 'https://swapi.dev/api/people/1/',
  vehicles: ['https://swapi.dev/api/vehicles/14/'],
};

describe('<CharacterDetails />', () => {
  test('should render without errors', async () => {
    render(<CharacterDetails />);
  });
  test('should render character details', async () => {
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    const globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    const { findByTestId } = render(<CharacterDetails characterID="1" />);
    const characterDetails = await findByTestId('characterDetails');
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('19 BBY')).toBeInTheDocument();
    expect(screen.getByText('172')).toBeInTheDocument();
    expect(screen.getByText('77')).toBeInTheDocument();
    expect(screen.getByText('Blond')).toBeInTheDocument();
  });
});
