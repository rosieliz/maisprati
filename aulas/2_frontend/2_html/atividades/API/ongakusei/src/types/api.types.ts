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

enum SearchStatus {
  Idle,
  InProgress,
  Found,
  NotFound,
}

export { type ISong, type IHitResult, SearchStatus };
