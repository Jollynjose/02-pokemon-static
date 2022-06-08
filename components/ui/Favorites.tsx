import { Grid } from '@nextui-org/react';
import React, { FC } from 'react';
import { FavoritePokemonCard } from '../pokemon';

interface Props {
  pokemons: number[];
}

export const Favorites: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoritePokemonCard key={`pokemon_${id}`} pokemonId={id}/>
      ))}
    </Grid.Container>
  );
};
