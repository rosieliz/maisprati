import styles from "@/styles/Sidepane.module.css";

import type { ISong } from "@/types/api.types";

type SidepaneProps = {
  song: ISong;
};

function Sidepane({ song }: SidepaneProps) {
  return (
    <aside className={styles.sidepane}>
      <img src={song.thumb} alt="Capa do lançamento" />
      <div className={styles.sidepane__info}>
        <p className={styles.sidepane__info__title}>{song.title}</p>
        <p className={styles.sidepane__info__artist}>{song.artists}</p>
      </div>
    </aside>
  );
}

export default Sidepane;
