import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";
import { useEffect, useState } from "react";
import Quiz from "@/components/Quiz";

const questionMock = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.isCorrect("Roxo"),
  AnswerModel.isWrong("Vermelha"),
  AnswerModel.isWrong("Azul"),
  AnswerModel.isWrong("Amarelo"),
]);

const BASE_URL = "http://localhost:3000/api";
export default function Home() {
  const [question, setQuestion] = useState<QuestionModel>(questionMock);
  const [questionIds, setQuestionsIds] = useState<number[]>([]);

  async function loadQuestionsIds() {
    try {
      const resp = await fetch(`${BASE_URL}/quiz`);
      const ids = await resp.json();
      setQuestionsIds(ids);
    } catch (e) {
      console.log(e);
    }
  }
  async function loadQuestion(idQuestion: number) {
    try {
      const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
      const json = await resp.json();
      const newQuestion = QuestionModel.createUsingObject(json);
      setQuestion(newQuestion);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0]);
  }, [questionIds]);

  function anseweredQuestion(question: QuestionModel) {}

  function goToNextStep() {}

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Quiz
        question={question}
        last={false}
        anseweredQuestion={anseweredQuestion}
        goToNextStep={goToNextStep}
      />
    </div>
  );
}
