export default class AnswerModel {
  private _value: string;
  private _isCorrect: boolean;
  private _revealed: boolean;

  constructor(value: string, isCorrect:boolean, revealed = false) {
    this._value = value;
    this._isCorrect = isCorrect;
    this._revealed = revealed;
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
  
}
