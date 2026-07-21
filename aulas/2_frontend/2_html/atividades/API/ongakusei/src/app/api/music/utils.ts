"use cache";

// @ts-ignore
import { getLyrics } from "genius-lyrics-api";
import type { ISong, IHitResult } from "@/types/api.types";

async function fetchSongs(query: string, page: string): Promise<ISong[]> {
  const url = `https://api.genius.com/search?q=${encodeURIComponent(query)}&page=${page}`;
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
  if (song.lyrics) return song.lyrics;

  console.log("Attempting to scrape lyrics from Genius...");

  const geniusPageContent = await fetch(song.url).then((res) => res.text());
  if (!geniusPageContent.includes("data-dnt")) return scrapeGeniusLyrics(song);

  console.log("Genius scraping blocked. Falling back to LRCLIB...");
  return fetchLyricsWithLrclib(song);
}

async function scrapeGeniusLyrics(song: ISong): Promise<string> {
  const scrapedResponse: string = await getLyrics({
    apiKey: process.env.GENIUS_ACCESS_KEY,
    title: song.title,
    artist: song.artists,
    optimizeQuery: true,
  });
  return scrapedResponse
    .replace(/\d+.*Read More\s/, "")
    .replace(/\d+\sContributor(s?).*Lyrics/, "")
    .replace(/\d+\sContributor(s?)$/, "");
}

async function fetchLyricsWithLrclib(song: ISong): Promise<string> {
  const url = new URL(
    `https://lrclib.net/api/search?track_name=${song.title}&artist_name=${song.artists}`,
  ).href;
  const data = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error("Error fetching lyrics:", err));
  return data?.[0]?.plainLyrics || "";
}

export { fetchSongs, fetchLyrics };
