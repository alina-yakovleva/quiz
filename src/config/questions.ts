import { IQuestion } from "../type";

type IQuestionId = number;
type IAnswerId = number;

// data[1]; // answer id

// correctAnswerId === AnswerId  ? 'green' : data[1] === AnswerId ? 'red' : ''

export const QUESTIONS: IQuestion[] = [
  {
    id: 1,
    text: "Столицей Франции является город:",
    correctAnswerId: 1,
    answers: [
      { id: 1, text: "Париж" },
      { id: 2, text: "Вашингтон" },
      { id: 3, text: "Нью-Йорк" },
      { id: 4, text: "Лиссабон" },
    ],
  },
  {
    id: 2,
    text: "Столицей США является город:",
    correctAnswerId: 6,
    answers: [
      { id: 5, text: "Бостон" },
      { id: 6, text: "Вашингтон" },
      { id: 7, text: "Нью-Йорк" },
      { id: 8, text: "Голливуд" },
    ],
  },
  {
    id: 3,
    text: "Столицей России является город:",
    correctAnswerId: 12,
    answers: [
      { id: 9, text: "Брянск" },
      { id: 10, text: "Тверь" },
      { id: 11, text: "Краснодар" },
      { id: 12, text: "Москва" },
    ],
  },
  {
    id: 4,
    text: "Столицей Нидерландов является город:",
    correctAnswerId: 15,
    answers: [
      { id: 13, text: "Берлин" },
      { id: 14, text: "Афины" },
      { id: 15, text: "Амстердам" },
      { id: 16, text: "Киев" },
    ],
  },
  {
    id: 5,
    text: "Столицей Польши является город:",
    correctAnswerId: 17,
    answers: [
      { id: 17, text: "Варшава" },
      { id: 18, text: "Вена" },
      { id: 19, text: "Нью-Йорк" },
      { id: 20, text: "Вильнюс" },
    ],
  },
];
