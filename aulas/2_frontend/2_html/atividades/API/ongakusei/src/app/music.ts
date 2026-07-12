"use server";

import * as cheerio from "cheerio";
import type { IHitResult, ISong } from "@/types/api.types";

async function getRecords(query: string): Promise<ISong[]> {
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

async function getLyrics(songUrl: string) {
  const url = new URL(songUrl);
  const pageText = await fetch(url.href).then((res) => res.text());
  const selector = cheerio.load(pageText);
  const containers = selector("div[data-lyrics-container='true']");

  const lyrics = containers
    .contents()
    .not("div > *")
    .map((i: number, el: any) =>
      i !== 0 && el.data.startsWith("[") ? `\n${el.data}` : el.data,
    )
    .toArray()
    .join("\n");

  return lyrics;
}

export { getRecords, getLyrics };
