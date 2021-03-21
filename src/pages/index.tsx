import LinkWrapper from 'components/LinkWrapper';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

import Main from 'components/Main';

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Main />
    </>
  );
}
