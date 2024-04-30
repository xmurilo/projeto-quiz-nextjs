import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Timer.module.css";

interface TimerProps {
  key: any;
  duration: number;
  timeIsOver: () => void;
}

export default function Timer(props: TimerProps) {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={props.duration}
        onComplete={props.timeIsOver}
        colors={["#008000", "#FFFF00", "#FF0000", "#FF0000"]}
        colorsTime={[10, 6, 4, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
