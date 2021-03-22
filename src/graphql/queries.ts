import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`;

export const GET_ARTISTS = gql`
  query getArtists($first: Int) {
    artists(first: $first) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`;

export const GET_ARTIST_BY_SLUG = gql`
  query getArtistBySlug($slug: String!) {
    artist(where: { slug: $slug }) {
      name
      slug
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        height
        width
        url
      }
    }
  }
`;
