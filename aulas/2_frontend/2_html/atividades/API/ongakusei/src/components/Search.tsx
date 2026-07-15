import styles from "@/styles/Search.module.css";

import { useState } from "react";
import { type ISong, SearchStatus } from "@/types/api.types";

type SearchProps = {
  callback: (song: ISong, searchStatus: SearchStatus) => void;
};

function Search({ callback }: SearchProps) {
  const [songs, setSongs] = useState<ISong[]>();
  const [searchValue, setSearchValue] = useState<string>("");

  const renderOptions = async (query: string) => {
    if (!query.trim()) return;

    const { songs: options } = await await fetch(`/api/music?q=${query}`).then(
      (res) => res.json(),
    );
    if (!options) {
      console.log("Nenhum lançamento encontrado.");
      return;
    }
    setSongs(options);
  };

  const addLyrics = async (song: ISong): Promise<ISong> => {
    if (song.lyrics) return song;

    const { lyrics } = await fetch("api/music", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ song }),
    }).then((res) => res.json());

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
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && renderOptions(searchValue)}
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
