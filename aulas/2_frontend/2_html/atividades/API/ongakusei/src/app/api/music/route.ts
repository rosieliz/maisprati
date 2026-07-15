import { NextRequest, NextResponse } from "next/server";
import { fetchSongs, scrapeLyrics } from "./utils";

async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Missing query parameter" },
      { status: 400 },
    );
  }

  try {
    const songs = await fetchSongs(query);
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

    const { songUrl } = body;
    if (!songUrl) {
      return NextResponse.json({ error: "Missing song url" }, { status: 400 });
    }

    const lyrics = await scrapeLyrics(songUrl);
    if (!lyrics) {
      return NextResponse.json({ error: "Lyrics not found" }, { status: 404 });
    }

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
