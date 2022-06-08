import { SmallPokemon } from '../../types';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props {
  pokemons: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemons: { id, name, img } }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1.2}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img as string} width="100%" height={140} />
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{name}</Text>
              <Text>#{id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
