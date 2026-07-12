"use client";

import { useState } from "react";
import type { ISong } from "@/types/api.types";

import Header from "@/components/Header";
import Search from "@/components/Search";
import Sidepane from "@/components/Sidepane";
import Footer from "@/components/Footer";

const defaultSongData: ISong = {
  id: 0,
  url: "#",
  title: "...",
  artists: "...",
  thumb: "https://placehold.co/290/c89fb5/c89fb5",
};

export default function Home() {
  const [selectedSong, setSelectedSong] = useState<ISong>(defaultSongData);
  const [lyrics, setLyrics] = useState<string>("");

  return (
    <>
      <Header />
      <div id="content">
        <div className="container">
          <main>
            <Search
              callback={(newSong: ISong, foundLyrics: string) => {
                setLyrics(foundLyrics);
                setSelectedSong(newSong);
              }}
            />
          </main>
          <Sidepane song={selectedSong} lyrics={lyrics} />
        </div>
      </div>
      <Footer />
    </>
  );
}
