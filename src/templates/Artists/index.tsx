import { NextSeo } from 'next-seo';

import Image from 'next/image';

import LinkWrapper from 'components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import * as S from './styles';
import { useRouter } from 'next/dist/client/router';

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type ArtistTemplateProps = {
  artist: {
    slug: string;
    name: string;
    description?: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function ArtistTemplate({ artist }: ArtistTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <NextSeo
        title={`${artist.name}`}
        description="Um projeto que mostra os artista mais ouvidos das capitais brasileiras e suas informações."
        canonical="https://local-music.marcosnto.dev"
        openGraph={{
          url: 'https://local-music.marcosnto.dev',
          title: 'Local Music',
          description:
            'Um projeto que mostra os artista mais ouvidos das capitais brasileiras e suas informações.',
          // images: [{
          //   url:
          //   width:
          //   height:
          //   alt:
          // }]
          site_name: 'Local Music'
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go Back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{artist.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: artist.description?.html || '' }}
          />
          <S.Gallery>
            {artist.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={artist.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
