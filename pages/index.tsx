import { Button } from '@nextui-org/react';
import type { GetStaticProps, NextPage } from 'next';
import { MainLayout } from '../components/layouts';
const Home: NextPage = (props) => {
  console.log(props);
  return (
    <MainLayout title="Listado de pokemones">
      <>
        <h1>hello people</h1>
        <ul>
          <li>pokemon</li>
          <li>pokemon</li>
          <li>pokemon</li>
          <li>pokemon</li>
          <li>pokemon</li>
        </ul>
      </>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  // const {data} = ;
  console.log(ctx);
  return {
    props: {
      name: 'peter',
    },
  };
};
export default Home;
