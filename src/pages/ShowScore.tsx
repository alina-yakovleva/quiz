import { ListItemText, Typography } from "@mui/material";

import { FC } from "react";
import { IQuestion } from "../type";
import { QuestionAnswerMap } from "./MainPage";

interface ShowScoreProps {
  questions: IQuestion[];
  resultScore: number | null;
  map: QuestionAnswerMap;
}

const ShowScore: FC<ShowScoreProps> = ({ questions, resultScore, map }) => {
  return (
    <>
      <Typography variant="h3">Тест завершен</Typography>
      <Typography style={{ textDecoration: "underline" }}>
        Правильных ответов {resultScore} из {questions.length}
      </Typography>

      {questions.map((question) => (
        <>
          <ListItemText>Вопрос:{question.text}</ListItemText>
          <ListItemText>
            {question.answers.map((answer) => (
              <ListItemText
                style={{
                  border:
                    question.correctAnswerId === answer.id
                      ? "3px solid green"
                      : map[question.id] === answer.id
                      ? "3px solid red"
                      : "",
                }}
              >
                {answer.text}
              </ListItemText>
            ))}
          </ListItemText>
        </>
      ))}
    </>
  );
};

export default ShowScore;
