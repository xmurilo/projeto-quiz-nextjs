import styles from "../styles/Quiz.module.css";
import QuestionModel from "@/model/question";
import Question from "./Question";
import Button from "./Button";

interface QuizProps {
  question: QuestionModel;
  last: boolean;
  anseweredQuestion: (question: QuestionModel) => void;
  goToNextStep: () => void;
}

export default function Quiz(props: QuizProps) {
  function answerProvided(index: number) {
    if (props.question.isNotAnswered) {
      props.anseweredQuestion(props.question.answerWith(index));
    }
  }

  return (
    <div className={styles.quiz}>
      {props.question ? (
        <Question
          value={props.question}
          timeToResponse={6}
          onResponse={answerProvided}
          timeIsOver={props.goToNextStep}
        />
      ) : (
        false
      )}

      <Button onClick={props.goToNextStep} text={props.last ? "Finalizar" : "Próxima"} />
    </div>
  );
}
