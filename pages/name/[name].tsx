import React, { useState } from 'react';
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { MainLayout } from '../../components/layouts';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { PokemonListResponse, Pokemon } from '../../types';
import { getPokemonInfo, localFavorites } from '../../utils';

interface Props {
  pokemon: Pokemon
}

const PokemonPageByName: NextPage<Props> = ({ pokemon }) => {
  const title = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  const [isInFavorite, setIsInFavorites] = useState(false);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
    if (isInFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };
  return (
    <MainLayout title={title}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  '/no-image.png'
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              ></Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorite}
                onPress={onToggleFavorite}
              >
                {isInFavorite ? 'En favoritos' : 'Guardar en Favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction="row" display="flex" justify="space-between">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons151: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemons151.map((name) => ({ params: { name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return { props: { pokemon: await getPokemonInfo(name) } };
};

export default PokemonPageByName;
