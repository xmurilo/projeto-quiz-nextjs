import { shuffle } from "@/functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
  private _id: number;
  private _statement: string;
  private _answers: AnswerModel[];
  private _isCorrect: boolean;

  constructor(id: number, statemant: string, answers: AnswerModel[], isCorrect = false) {
    this._id = id;
    this._statement = statemant;
    this._answers = answers;
    this._isCorrect = isCorrect;
  }

  get id(): number {
    return this._id;
  }

  get statement(): string {
    return this._statement;
  }

  get answers(): any[] {
    return this._answers;
  }

  get isCorrect(): boolean {
    return this._isCorrect;
  }

  get answered(): boolean {
    for (let answer of this._answers) {
      if (answer.revealed) return true;
    }
    return false;
  }

  shuffleAnswers(): QuestionModel {
    let scrambledAnswers = shuffle(this._answers);
    return new QuestionModel(this._id, this._statement, scrambledAnswers, this._isCorrect);
  }
}
