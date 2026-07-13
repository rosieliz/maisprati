import styles from "@/styles/Search.module.css";

import { useState } from "react";
import { fetchSongs, scrapeLyrics } from "../app/music";
import { type ISong, SearchStatus } from "@/types/api.types";

type SearchProps = {
  callback: (song: ISong, searchStatus: SearchStatus) => void;
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

  const addLyrics = async (song: ISong): Promise<ISong> => {
    const lyrics = await scrapeLyrics(song.url);

    setSongs((prevState) =>
      !prevState
        ? prevState
        : prevState.map((state) =>
            state.id === song.id ? { ...song, lyrics } : state,
          ),
    );

    return { ...song, lyrics };
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
              onClick={() => {
                callback(song, SearchStatus.InProgress);
                addLyrics(song).then((e) =>
                  callback(
                    e,
                    e.lyrics ? SearchStatus.Found : SearchStatus.NotFound,
                  ),
                );
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
