import * as cheerio from "cheerio";
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

async function scrapeLyrics(songUrl: string): Promise<string> {
  const url = new URL(songUrl);
  const pageText = await fetch(url.href, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      Referer: "https://www.google.com/",
    },
  }).then((res) => res.text());

  const $ = cheerio.load(pageText);
  if ($("div[class^=LyricsPlaceholder]").length) return "";

  const containers = $("div[data-lyrics-container=true]");

  const getLines = (el: any) =>
    el.type === "text"
      ? $(el).text() + "\n"
      : ["a", "span", "i"].includes(el.name)
        ? el.childNodes.map((e: any) => getLines(e)).join("")
        : "";

  const lyrics = containers
    .contents()
    .not("div[data-exclude-from-selection='true']")
    .map((_, el) => getLines(el))
    .get()
    .map((line) => (line.startsWith("[") ? `\n${line}` : line))
    .join("")
    .trim();

  return lyrics;
}

export { fetchSongs, scrapeLyrics };
