export default class QuestionModel {
  private _id: number;
  private _statement: string;
  private _answers: any[];
  private _isCorrect: boolean;

  constructor(id: number, statemant: string, answers: any[], isCorrect = false) {
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
}
