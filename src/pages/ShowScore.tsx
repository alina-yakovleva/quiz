import { ListItemText, Typography } from "@mui/material";

import { FC } from "react";
import { IQuestion } from "../type";

interface ShowScoreProps {
  questions: IQuestion[];
  resultScore: number | null;
}
// correctAnswerId === AnswerId  ? 'green' : data[1] === AnswerId ? 'red' : ''

const ShowScore: FC<ShowScoreProps> = ({ questions, resultScore }) => {
  return (
    <>
      <Typography variant="h3">Тест завершен</Typography>
      <Typography style={{ textDecoration: "underline" }}>
        Правильных ответов {resultScore} из {questions.length}
      </Typography>

      {questions.map((question) => (
        <>
          <ListItemText>{question.text}</ListItemText>
          <ListItemText>
            {question.answers.map((answer) => (
              <ListItemText
                style={{
                  backgroundColor:
                    question.correctAnswerId === answer.id ? "green" : " ",
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
