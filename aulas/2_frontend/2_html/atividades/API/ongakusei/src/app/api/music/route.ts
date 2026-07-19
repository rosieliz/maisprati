import { NextRequest, NextResponse } from "next/server";
import { fetchSongs, fetchLyrics } from "./utils";

async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const page = searchParams.get("page") || "1";

  if (!query) {
    return NextResponse.json(
      { error: "Missing query parameter" },
      { status: 400 },
    );
  }

  try {
    const songs = await fetchSongs(query, page);
    return NextResponse.json({ songs });
  } catch (err) {
    console.error("Search error:", err);
    return NextResponse.json(
      { error: "Failed to fetch songs" },
      { status: 500 },
    );
  }
}

async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { song } = body;
    if (!song.url) {
      return NextResponse.json({ error: "Missing song url" }, { status: 400 });
    }

    // const lyrics = await scrapeLyrics(songUrl);
    // if (!lyrics) {
    //   return NextResponse.json(
    //     { error: "Lyrics not found, likely blocked by anti-bot measures" },
    //     { status: 404 },
    //   );
    // }

    const lyrics = await fetchLyrics(song);

    return NextResponse.json({ lyrics });
  } catch (err) {
    console.error("Scraping error:", err);
    return NextResponse.json(
      { error: "Failed to scrape lyrics" },
      { status: 500 },
    );
  }
}

export { GET, POST };
