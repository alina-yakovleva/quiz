export interface IQuestion {
  id: number;
  text: string;
  correctAnswerId: number;
  answers: IAnswer[];
}

export interface IAnswer {
  id: number;
  text: string;
}
