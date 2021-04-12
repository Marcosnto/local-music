import { NextSeo } from 'next-seo';

import dynamic from 'next/dynamic';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import LinkWrapper from 'components/LinkWrapper';
import { MapProps } from 'components/Map';

const Map = dynamic(() => import('components/Map'), { ssr: false });

export default function HomeTemplate({ artists }: MapProps) {
  return (
    <>
      <NextSeo
        title="Local Music"
        description="Um projeto que mostra os artista mais ouvidos das capitais brasileiras e suas informações."
        canonical="https://local-music.marcosnto.dev"
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map artists={artists} />
    </>
  );
}
