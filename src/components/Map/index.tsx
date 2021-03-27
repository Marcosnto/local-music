import { useRouter } from 'next/dist/client/router';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

type Artist = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  artists?: Artist[];
};

const Map = ({ artists }: MapProps) => {
  const router = useRouter();

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {artists?.map(({ id, slug, name, location }) => {
        const { latitude, longitude } = location;
        return (
          <Marker
            key={`place-${id}`}
            title={name}
            position={[latitude, longitude]}
            eventHandlers={{
              click: () => {
                router.push(`/artists/${slug}`);
              }
            }}
          />
        );
      })}
    </MapContainer>
  );
};

export default Map;
