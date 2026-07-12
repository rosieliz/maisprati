import styles from "@/styles/Search.module.css";

import { useState } from "react";
import { fetchSongs, scrapeLyrics } from "../app/music";
import type { ISong } from "../types/api.types";

type SearchProps = {
  callback: (song: ISong, foundLyrics: string) => void;
};

function Search({ callback }: SearchProps) {
  const [songs, setSongs] = useState<ISong[]>();

  const renderOptions = async (query: string) => {
    if (!query.trim()) return;

    const options = await fetchSongs(query).then((res) => res);
    if (!options) {
      console.log("Nenhum lançamento encontrado.");
      return;
    }
    setSongs(options);
  };

  return (
    <div className="input-area">
      <input
        className={styles.querySearch}
        type="text"
        placeholder="Pesquise por título..."
        onBlur={(e) => renderOptions(e.target.value)}
      />
      <div className={styles.searchResults}>
        {songs &&
          songs.map((song) => (
            <div
              key={song.id}
              className={styles.searchResult}
              onClick={async () => {
                const lyrics = await scrapeLyrics(song.url);
                callback(song, lyrics);
              }}
            >
              <img
                className={styles.searchResultImage}
                src={song.thumb}
                alt="Capa do lançamento"
              />
              <span>{song.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
