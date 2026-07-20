import styles from "@/styles/Sidepane.module.css";

import { type ISong, ProgressStatus } from "@/types/api.types";
import Loader from "./Loader";

type SidepaneProps = {
  song: ISong;
  status: ProgressStatus;
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
      <Loader />
      Buscando letras...
    </div>
  );
  const notFoundDisplay = (
    <div className={styles.notFound}>Nenhuma letra encontada.</div>
  );

  return (
    <aside className={"sidepane " + styles.sidepane}>
      <img src={thumb} alt="Capa do lançamento" />
      <div className={styles.info}>
        <p className={styles.infoTitle}>{title}</p>
        <p className={styles.infoArtist}>{artists}</p>
      </div>
      {status !== ProgressStatus.Idle && (
        <div className={styles.lyrics}>
          {(() => {
            switch (status) {
              case ProgressStatus.InProgress:
                return progressDisplay;
              case ProgressStatus.Found:
                return lyricsDisplay;
              case ProgressStatus.NotFound:
                return notFoundDisplay;
            }
          })()}
        </div>
      )}
    </aside>
  );
}

export default Sidepane;
