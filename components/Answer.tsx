import AnswerModel from "@/model/answer";
import styles from "../styles/Answer.module.css";
interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  backgroundColorLetter: string;
  onResponse: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;
  const answerRevealed = answer.revealed ? styles.answerRevealed : "";
  return (
    <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
      <div className={`${answerRevealed} ${styles.contentAnswer} `}>
        <div className={styles.front}>
          <div className={styles.letter} style={{ backgroundColor: props.backgroundColorLetter }}>
            {props.letter}
          </div>
          <div className={styles.value}>{answer.value}</div>
        </div>
        <div className={styles.back}>
          {answer.isCorrect ? (
            <div className={styles.isRight}>
              <div>A resposta certa é...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>A resposta informada está errada...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
