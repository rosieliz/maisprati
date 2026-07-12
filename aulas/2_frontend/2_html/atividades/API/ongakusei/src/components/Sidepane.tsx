import styles from "@/styles/Sidepane.module.css";

import type { ISong } from "@/types/api.types";

type SidepaneProps = {
  song: ISong;
};

function Sidepane({ song: { title, artists, thumb, lyrics } }: SidepaneProps) {
  return (
    <aside className={styles.sidepane}>
      <img src={thumb} alt="Capa do lançamento" />
      <div className={styles.info}>
        <p className={styles.infoTitle}>{title}</p>
        <p className={styles.infoArtist}>{artists}</p>
      </div>
      {lyrics && (
        <div className={styles.lyrics}>
          <p className={styles.lyricsTitle}>Letras</p>
          <p className={styles.lyricsLines}>{lyrics}</p>
        </div>
      )}
    </aside>
  );
}

export default Sidepane;
