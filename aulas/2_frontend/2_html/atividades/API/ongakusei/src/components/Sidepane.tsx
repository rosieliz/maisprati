import styles from "@/styles/Sidepane.module.css";

import { type ISong, SearchStatus } from "@/types/api.types";

type SidepaneProps = {
  song: ISong;
  status: SearchStatus;
};

function Sidepane({
  song: { title, artists, thumb, lyrics },
  status,
}: SidepaneProps) {
  const lyricsDisplay = (
    <>
      <p className={styles.lyricsTitle}>Letras</p>
      <p className={styles.lyricsLines}>{lyrics}</p>
    </>
  );

  const progressDisplay = (
    <div className={styles.progressDisplay}>
      <div className={styles.loader}></div>
      Buscando letras...
    </div>
  );
  const notFoundDisplay = (
    <div className={styles.notFound}>Nenhuma letra encontada.</div>
  );

  return (
    <aside className={styles.sidepane}>
      <img src={thumb} alt="Capa do lançamento" />
      <div className={styles.info}>
        <p className={styles.infoTitle}>{title}</p>
        <p className={styles.infoArtist}>{artists}</p>
      </div>
      {status !== SearchStatus.Idle && (
        <div className={styles.lyrics}>
          {(() => {
            switch (status) {
              case SearchStatus.InProgress:
                return progressDisplay;
              case SearchStatus.Found:
                return lyricsDisplay;
              case SearchStatus.NotFound:
                return notFoundDisplay;
            }
          })()}
        </div>
      )}
    </aside>
  );
}

export default Sidepane;
