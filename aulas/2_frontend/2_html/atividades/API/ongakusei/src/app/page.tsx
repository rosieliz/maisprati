"use client";

import { useState } from "react";
import { type ISong, SearchStatus } from "@/types/api.types";

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
  lyrics: "",
};

export default function Home() {
  const [selectedSong, setSelectedSong] = useState<ISong>(defaultSongData);
  const [status, setStatus] = useState<SearchStatus>(SearchStatus.Idle);

  return (
    <>
      <Header />
      <div id="content">
        <div className="container">
          <main>
            <Search
              callback={(song: ISong, searchStatus: SearchStatus) => {
                setSelectedSong(song);
                setStatus(searchStatus);
              }}
            />
          </main>
          <Sidepane song={selectedSong} status={status} />
        </div>
      </div>
      <Footer />
    </>
  );
}
