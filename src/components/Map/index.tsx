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
  /* those variables need to be able on client-side, for that we pass
  with NEXT_PUBLIC */
  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
  const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID;

  const router = useRouter();

  const CustomTileLayer = () => {
    return MAPBOX_API_KEY ? (
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">Mapbox</a> contributors'
        url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
      />
    ) : (
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    );
  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />
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
