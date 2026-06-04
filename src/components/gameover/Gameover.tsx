import styles from "./Gameover.module.css";
type GameoverProps = {
  onRestart: () => void;
};

const Gameover = ({ onRestart }: GameoverProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.gameover}>Game Over!</div>
      <button className={styles.restartButton} onClick={onRestart}>
        Restart
      </button>
    </div>
  );
};

export default Gameover;
