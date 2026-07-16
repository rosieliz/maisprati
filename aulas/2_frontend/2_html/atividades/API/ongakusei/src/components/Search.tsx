import styles from "@/styles/Search.module.css";

import { useState } from "react";
import { type ISong, ProgressStatus } from "@/types/api.types";

type SearchProps = {
  callback: (song: ISong, searchStatus: ProgressStatus) => void;
};

function Search({ callback }: SearchProps) {
  const [songs, setSongs] = useState<ISong[]>();
  const [searchValue, setSearchValue] = useState<string>("");

  const renderOptions = async (query: string) => {
    if (!query.trim()) return;

    const results = await fetch(`/api/music?q=${query}`)
      .then((res) => res.json())
      .then((data) => data.songs);
    if (!results) {
      console.log("Nenhuma música encontrada.");
      return;
    }
    setSongs(results);
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
    <div>
      <div className={styles.inputArea}>
        <input
          className={styles.querySearch}
          type="text"
          placeholder="Pesquise músicas por título..."
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && renderOptions(searchValue)}
        />
        <button onClick={() => renderOptions(searchValue)}>PESQUISAR</button>
      </div>
      <div className={styles.searchResults}>
        {songs &&
          songs.map((song) => (
            <div
              key={song.id}
              className={styles.searchResult}
              onClick={() => {
                callback(song, ProgressStatus.InProgress);
                addLyrics(song).then((e) =>
                  callback(
                    e,
                    e.lyrics ? ProgressStatus.Found : ProgressStatus.NotFound,
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
