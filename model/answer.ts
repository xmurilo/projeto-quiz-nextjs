export default class AnswerModel {
  private _value: string;
  private _isCorrect: boolean;
  private _revealed: boolean;

  constructor(value: string, isCorrect: boolean, revealed = false) {
    this._value = value;
    this._isCorrect = isCorrect;
    this._revealed = revealed;
  }

  static isCorrect(value: string) {
    return new AnswerModel(value, true);
  }

  static isWrong(value: string) {
    return new AnswerModel(value, false);
  }

  get value(): string {
    return this._value;
  }

  get isCorrect(): boolean {
    return this._isCorrect;
  }

  get revealed(): boolean {
    return this._revealed;
  }

  static createUsingObject(obj: AnswerModel): AnswerModel {
    return new AnswerModel(obj._value, obj._isCorrect, obj._revealed);
  }

  toReveal() {
    return new AnswerModel(this._value, this._isCorrect, true);
  }
}