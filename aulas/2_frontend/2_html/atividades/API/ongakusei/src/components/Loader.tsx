import styles from "@/styles/Loader.module.css";

type LoaderProps = {
  size?: number;
};

function Loader({ size = 20 }: LoaderProps) {
  return (
    <div
      className={styles.loader}
      style={{
        width: size,
        height: size,
      }}
    ></div>
  );
}

export default Loader;
