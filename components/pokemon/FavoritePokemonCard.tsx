import { Card, Grid } from '@nextui-org/react';
import React, { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
  pokemonId: number;
}

export const FavoritePokemonCard: FC<Props> = ({ pokemonId: id }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1} onClick={onFavoriteClicked}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={'100%'}
          height={140}
        ></Card.Image>
      </Card>
    </Grid>
  );
};
