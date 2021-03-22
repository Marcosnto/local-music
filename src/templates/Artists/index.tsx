type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type ArtistTemplateProps = {
  artist: {
    slug: string;
    name: string;
    description: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function ArtistTemplate({ artist }: ArtistTemplateProps) {
  return (
    <>
      <h1>{artist.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: artist.description.html }} />
      {artist.gallery.map((image, index) => (
        <img key={`photo-${index}`} src={image.url} alt={artist.name} />
      ))}
    </>
  );
}
