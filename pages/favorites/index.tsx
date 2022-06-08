import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { MainLayout } from '../../components/layouts';
import { Favorites, NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <MainLayout title="Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Favorites pokemons={favoritePokemons} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
