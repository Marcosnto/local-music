import client from 'graphql/client';
import { MapProps } from 'components/Map';
import { GetArtistsQuery } from 'graphql/generated/graphql';
import { GET_ARTISTS } from 'graphql/queries';

import HomeTemplate from 'templates/Home';

export default function Home({ artists }: MapProps) {
  return <HomeTemplate artists={artists} />;
}

export const getStaticProps = async () => {
  const { artists } = await client.request<GetArtistsQuery>(GET_ARTISTS);

  return {
    props: {
      artists
    }
  };
};
