"use server";

import * as cheerio from "cheerio";
import type { IHitResult, ISong } from "@/types/api.types";

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
  }));
  return releases;
}

async function scrapeLyrics(songUrl: string) {
  const url = new URL(songUrl);
  const pageText = await fetch(url.href).then((res) => res.text());
  const $ = cheerio.load(pageText);
  const containers = $("div[data-lyrics-container='true']");

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
