import styles from "@/styles/Sidepane.module.css";

import type { ISong } from "@/types/api.types";

type SidepaneProps = {
  song: ISong;
};

function Sidepane({ song }: SidepaneProps) {
  return (
    <aside className={styles.sidepane}>
      <img src={song.thumb} alt="Capa do lançamento" />
      <div className={styles.info}>
        <p className={styles.infoTitle}>{song.title}</p>
        <p className={styles.infoArtist}>{song.artists}</p>
      </div>
      {song.lyrics && (
        <div className={styles.lyrics}>
          <p className={styles.lyricsTitle}>Letras</p>
          <p className={styles.lyricsLines}>{song.lyrics}</p>
        </div>
      )}
    </aside>
  );
}

export default Sidepane;
