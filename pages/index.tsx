import Question from "@/components/Question";
import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";

export default function Home() {
  const questionTest = new QuestionModel(1, "Melhor cor?", [
    AnswerModel.isCorrect("Roxo"),
    AnswerModel.isWrong("Vermelha"),
    AnswerModel.isWrong("Azul"),
    AnswerModel.isWrong("Amarelo"),
  ]);
  
  return <Question value={questionTest} />;
}
