import React from 'react';
import { Switch, Route } from 'react-router-dom';
import style from './app.module.css';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { CharacterSearch } from '../Components/CharacterSearch';
import { CharacterResultsRoute, CharacterDetailsRoute } from '../Routes';

export const App: React.FC = () => {
  return (
    <div className={style.starWarsApp}>
      <Header />
      <main>
        <div className={style.container}>
          <CharacterSearch />
          <Switch>
            <Route path="/search" component={CharacterResultsRoute} />
            <Route
              path="/character/:characterID"
              component={CharacterDetailsRoute}
            />
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  );
};
