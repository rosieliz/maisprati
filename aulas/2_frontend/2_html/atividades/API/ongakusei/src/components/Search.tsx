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

  const [inputValue, setInputValue] = useState<string>("");

  const [page, setPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(0);

  const [didSearch, setDidSearch] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const [enablePrev, setEnablePrev] = useState<boolean>(false);
  const [enableNext, setEnableNext] = useState<boolean>(false);

  useEffect(() => {
    if (page > maxPage) {
      setMaxPage(page);
    }
    renderOptions();
  }, [page]);

  const prevPage = () => {
    setPage(Math.max(1, page - 1));
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const renderOptions = async () => {
    if (!inputValue.trim()) return;

    if (page > maxPage) {
      setFetching(true);
    }

    const { songs: results } = await fetch(
      `/api/music?q=${inputValue}&page=${page}`,
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

  const triggerSearch = () => {
    setFetching(true);
    setDidSearch(true);
    setMaxPage(1);
    setPage(1);
  };

  const selectSong = (song: ISong) => {
    callback(song, ProgressStatus.InProgress);
    addLyrics(song).then((e) =>
      callback(e, e.lyrics ? ProgressStatus.Found : ProgressStatus.NotFound),
    );
  };

  return (
    <div>
      <div className={styles.inputArea}>
        <input
          className={styles.querySearch}
          type="text"
          placeholder="Pesquise músicas por título..."
          autoComplete="off"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && triggerSearch()}
        />
        <button onClick={triggerSearch}>PESQUISAR</button>
      </div>
      <div className={styles.searchResults}>
        {fetching && !songs?.length ? (
          <div className={styles.listLoader}>
            <Loader size={40} />
          </div>
        ) : songs.length ? (
          <>
            {songs.map((song) => (
              <div
                key={song.id}
                className={styles.searchResult}
                onClick={() => selectSong(song)}
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
        ) : didSearch ? (
          <p className={styles.noMusicFound}>Nenhuma música encontrada.</p>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
