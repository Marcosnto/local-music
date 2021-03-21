import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), { ssr: false });

const Main = () => (
  <Map
    places={[
      {
        id: '2',
        name: 'Aracaju',
        slug: 'aracaju',
        location: {
          latitude: 1,
          longitude: 2
        }
      },
      {
        id: '3',
        name: 'Aracaju',
        slug: 'aracaju',
        location: {
          latitude: 2,
          longitude: 1
        }
      }
    ]}
  />
);

export default Main;
