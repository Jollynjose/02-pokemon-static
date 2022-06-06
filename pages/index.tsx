
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../types';

import { MainLayout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';

import type { GetStaticProps, NextPage } from 'next';
import { Button, Card, Grid, Row, Text } from '@nextui-org/react';
interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title="Listado de pokemones">
      <>
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon, index) => (
            <PokemonCard key={`pokemon_${index}`} pokemons={pokemon} />
          ))}
        </Grid.Container>
      </>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};
export default Home;
