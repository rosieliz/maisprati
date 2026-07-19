import styles from "@/styles/Search.module.css";

import { useState, useEffect } from "react";
import Image from "next/image";

import { type ISong, ProgressStatus } from "@/types/api.types";
import Loader from "./Loader";

type SearchProps = {
  callback: (song: ISong, searchStatus: ProgressStatus) => void;
};

function Search({ callback }: SearchProps) {
  const [songs, setSongs] = useState<ISong[]>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    renderOptions();
  }, [page]);

  const prevPage = () => {
    if (page - 1 < 1) return;
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const renderOptions = async () => {
    if (!searchValue.trim()) return;

    const { songs: results } = await fetch(
      `/api/music?q=${searchValue}&page=${page}`,
    ).then((res) => res.json());
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
          autoComplete="off"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && renderOptions()}
        />
        <button onClick={() => renderOptions()}>PESQUISAR</button>
      </div>
      <div className={styles.searchResults}>
        {songs && (
          <>
            {songs.map((song) => (
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
            <div className={styles.pagination}>
              {/*<Loader size={20} />*/}
              <button className={styles.paginationButton} onClick={prevPage}>
                <Image
                  src="/icons/caret-left.svg"
                  alt="c_left"
                  height={10}
                  width={10}
                />
              </button>
              <button className={styles.paginationButton} onClick={nextPage}>
                <Image
                  src="/icons/caret-right.svg"
                  alt="c_left"
                  height={10}
                  width={10}
                />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
