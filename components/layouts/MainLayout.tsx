import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { reactProps } from '../../types';
import { Navbar } from '../ui/Navbar';

interface Props extends reactProps {
  title?: string;
}

const origin = (typeof window === 'undefined') ? '': window.location.origin;

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
        
        <meta
          property="og:title"
          content={`Information about ${title}`}
        />
        <meta
          property="og:description"
          content={`That page is about ${title} `}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
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
