import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";

const questions: QuestionModel[] = [
  new QuestionModel(306, "Qual bicho transmite a Doença d Chagas?", [
    AnswerModel.isWrong("Abelha"),
    AnswerModel.isWrong("Barata"),
    AnswerModel.isWrong("Pulga"),
    AnswerModel.isCorrect("Barbeiro"),
  ]),
  new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "Jerimum"', [
    AnswerModel.isWrong("Caju"),
    AnswerModel.isWrong("Côco"),
    AnswerModel.isWrong("Chuchu"),
    AnswerModel.isCorrect("Abóbora"),
  ]),
];

export default questions;
