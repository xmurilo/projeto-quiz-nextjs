import Question from "@/components/Question";
import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";
import { useState } from "react";

const questionMock = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.isCorrect("Roxo"),
  AnswerModel.isWrong("Vermelha"),
  AnswerModel.isWrong("Azul"),
  AnswerModel.isWrong("Amarelo"),
]);

export default function Home() {
  const [question, setQuestion] = useState<QuestionModel>(questionMock);

  function onResponse(index: number): void {
    setQuestion(question.answerWith(index));
  }

  function timeIsOver(): void {
    // * -1 significa que o usuário não respondeu a tempo e a resposta é considerada errada
    if(question.isNotAnswered) {
      setQuestion(question.answerWith(-1));
    }
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Question 
      value={question}
      onResponse={onResponse}
      timeIsOver={timeIsOver}
      timeToResponse={11} />
    </div>
  );
}
