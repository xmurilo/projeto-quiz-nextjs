import AnswerModel from "@/model/answer";
import styles from "../styles/Answer.module.css";
interface AnswerProps {
  value: AnswerModel;
  index: number;
  letter: string;
  backgroundColorLetter: string;
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;

  return (
    <div className={styles.answer}>
      <div className={styles.contentAnswer}>
        <div className={styles.front}>
          <div className={styles.letter} 
          style={{ backgroundColor: props.backgroundColorLetter }}>
            {props.letter}
          </div>
          <div className={styles.value}>{answer.value}</div>
        </div>
        
        <div className={styles.back}></div>
      </div>
    </div>
  );
}
