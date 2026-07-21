import styles from "@/styles/Search.module.css";

import { useState, useEffect } from "react";
import Image from "next/image";

import { type ISong, ProgressStatus } from "@/types/api.types";
import Loader from "./Loader";

type SearchProps = {
  callback: (song: ISong, searchStatus: ProgressStatus) => void;
};

function Search({ callback }: SearchProps) {
  const [songs, setSongs] = useState<ISong[]>([]);

  const [searchValue, setSearchValue] = useState<string>("");
  const [fetching, setFetching] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(0);

  const [enablePrev, setEnablePrev] = useState<boolean>(false);
  const [enableNext, setEnableNext] = useState<boolean>(false);

  useEffect(() => {
    if (page > maxPage) {
      setMaxPage(page);
    }
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

    if (page > maxPage) {
      setFetching(true);
    }

    const { songs: results } = await fetch(
      `/api/music?q=${searchValue}&page=${page}`,
    ).then((res) => res.json());

    setFetching(false);

    if (!results) {
      console.log("Nenhuma música encontrada.");
      setEnableNext(false);
      return;
    }

    setSongs(results);
    setEnablePrev(page !== 1);
    setEnableNext(results?.length === 10);
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
        {fetching && !songs.length ? (
          <div className={styles.listLoader}>
            <Loader size={40} />
          </div>
        ) : songs ? (
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
                <div className={styles.resultTexts}>
                  <span>{song.title}</span>
                  <span className={styles.artists}>{song.artists}</span>
                </div>
              </div>
            ))}
            <div className={styles.pagination}>
              {fetching && <Loader size={20} />}
              {enablePrev && (
                <button className={styles.paginationButton} onClick={prevPage}>
                  <Image
                    src="/icons/caret-left.svg"
                    alt="c_left"
                    height={10}
                    width={10}
                  />
                </button>
              )}
              {enableNext && (
                <button className={styles.paginationButton} onClick={nextPage}>
                  <Image
                    src="/icons/caret-right.svg"
                    alt="c_left"
                    height={10}
                    width={10}
                  />
                </button>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
