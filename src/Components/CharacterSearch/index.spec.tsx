import React from 'react';
import {
  render,
  fireEvent,
  act,
  waitFor,
  screen,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { CharacterSearch } from './index';

const mockSuccessResponse = {
  count: 2,
  next: null,
  previous: null,
  results: [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [
        'http://swapi.dev/api/vehicles/14/',
        'http://swapi.dev/api/vehicles/30/',
      ],
      starships: [
        'http://swapi.dev/api/starships/12/',
        'http://swapi.dev/api/starships/22/',
      ],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'http://swapi.dev/api/people/1/',
    },
    {
      name: 'Luminara Unduli',
      height: '170',
      mass: '56.2',
      hair_color: 'black',
      skin_color: 'yellow',
      eye_color: 'blue',
      birth_year: '58BBY',
      gender: 'female',
      homeworld: 'http://swapi.dev/api/planets/51/',
      films: ['http://swapi.dev/api/films/5/', 'http://swapi.dev/api/films/6/'],
      species: ['http://swapi.dev/api/species/29/'],
      vehicles: [],
      starships: [],
      created: '2014-12-20T16:45:53.668000Z',
      edited: '2014-12-20T21:17:50.455000Z',
      url: 'http://swapi.dev/api/people/64/',
    },
  ],
};

describe('<CharacterSearch />', () => {
  test('should render without errors', async () => {
    render(<CharacterSearch />, { wrapper: MemoryRouter });
  });
  test('should render character results in suggestions', async () => {
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    const globalRef: any = global;
    globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    const { findByTestId } = render(<CharacterSearch />, {
      wrapper: MemoryRouter,
    });
    const characterSearch = await findByTestId('characterSearch');
    const input = await findByTestId('textInput');
    act(() => {
      fireEvent.change(input, { target: { value: 'LU' } });
    });
    await waitFor(() =>
      expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText('Luminara Unduli')).toBeInTheDocument()
    );
  });
  test('has form action for the search page ', async () => {
    const { findByTestId } = render(<CharacterSearch />, {
      wrapper: MemoryRouter,
    });
    const searchForm = await findByTestId('searchForm');
    expect(searchForm).toHaveAttribute('action', '/search');
  });
});
