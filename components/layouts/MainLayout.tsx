import { FC } from 'react';
import Head from 'next/head';
import { reactProps } from '../../types';
import { Navbar } from '../ui/Navbar';

interface Props extends reactProps {
  title?: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Jollyn Saint Hilaire"></meta>
        <meta
          name="description"
          content={`información sobre el pokémon ${title}`}
        ></meta>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
