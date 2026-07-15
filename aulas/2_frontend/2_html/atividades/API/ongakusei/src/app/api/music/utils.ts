import type { ISong, IHitResult } from "@/types/api.types";

async function fetchSongs(query: string): Promise<ISong[]> {
  const url = `https://api.genius.com/search?q=${encodeURIComponent(query)}`;
  const hits = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GENIUS_ACCESS_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.response.hits)
    .catch((err) => console.error("Result error:", err));

  if (!hits) return [];

  const releases = hits.map(({ result }: IHitResult): ISong => ({
    artists: result.artist_names,
    title: result.title,
    thumb: result.header_image_url,
    id: result.id,
    url: result.url,
    lyrics: "",
  }));
  return releases;
}

async function fetchLyrics(song: ISong): Promise<string> {
  const url = new URL(
    `https://lrclib.net/api/search?track_name=${song.title}&artist_name=${song.artists}`,
  ).href;
  const data = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching lyrics:", err));
  return data[0]?.plainLyrics || "";
}

export { fetchSongs, fetchLyrics };
