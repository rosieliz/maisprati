interface ISong {
  id: number;
  url: string;
  title: string;
  artists: string;
  thumb: string;
  lyrics: string;
}

interface IHitResult {
  result: {
    id: number;
    url: string;
    title: string;
    artist_names: string;
    header_image_url: string;
  };
}

export type { ISong, IHitResult };
