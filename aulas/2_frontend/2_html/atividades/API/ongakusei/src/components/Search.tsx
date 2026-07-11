import styles from "@/styles/Search.module.css";

import { useState } from "react";
import { getRecords, getLyrics } from "../lib/music";
import type { ISong } from "../types/api.types";

type SearchProps = {
  setSelectedSong: (song: ISong) => void;
};

function Search({ setSelectedSong }: SearchProps) {
  const [songs, setSongs] = useState<ISong[]>();

  const renderOptions = async (query: string) => {
    if (!query.trim()) return;

    const options = await getRecords(query).then((res) => res);
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
              className={styles.searchResults__result}
              onClick={() => setSelectedSong(song)}
            >
              <img
                className={styles.searchResults__image}
                src={song.thumb}
                alt="Capa do lançamento"
              />
              <span className={styles.searchResults__title}>{song.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
