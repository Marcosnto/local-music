import { GetStaticProps } from 'next';

import client from 'graphql/client';
import {
  GetArtistBySlugQuery,
  GetArtistsQuery
} from 'graphql/generated/graphql';
import { GET_ARTISTS, GET_ARTIST_BY_SLUG } from 'graphql/queries';
import { useRouter } from 'next/dist/client/router';

import ArtistTemplate, { ArtistTemplateProps } from 'templates/Artists';

export default function Artist({ artist }: ArtistTemplateProps) {
  const router = useRouter();

  //retorna um loading ou qualquer coisa eqt cria
  if (router.isFallback) return null;

  return <ArtistTemplate artist={artist} />;
}

export async function getStaticPaths() {
  const { artists } = await client.request<GetArtistsQuery>(GET_ARTISTS, {
    first: 3
  });

  const paths = artists.map(({ slug }) => ({
    params: { slug }
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { artist } = await client.request<GetArtistBySlugQuery>(
    GET_ARTIST_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  );

  if (!artist) return { notFound: true };

  return {
    props: {
      artist
    }
  };
};
