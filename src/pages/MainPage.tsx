import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { QUESTIONS } from "../config/questions";
import Answer from "../components/Answer";

import { Content, Number, Question, Answers, Navigation } from "../styles";
import ShowScore from "./ShowScore";

export interface QuestionAnswerMap {
  [key: number]: number;
}

const MainPage: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultScore, setResultscore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [map, setMap] = useState<QuestionAnswerMap>({});

  const questionId = QUESTIONS[currentQuestion].id;

  const correctAnswerId = QUESTIONS[currentQuestion].correctAnswerId;

  const handleClick = (id: number) => {
    const newMap = { ...map, [questionId]: id };

    if (id === correctAnswerId) {
      setResultscore(resultScore + 1);
    }
    setMap(newMap);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < QUESTIONS.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const onRight = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < QUESTIONS.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const onLeft = () => {
    if (currentQuestion === 0) {
      setCurrentQuestion(currentQuestion);
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <>
      {showScore ? (
        <ShowScore
          key={QUESTIONS[currentQuestion].id}
          resultScore={resultScore}
          questions={QUESTIONS}
          map={map}
        />
      ) : (
        <>
          <Content>
            <Number>
              {currentQuestion + 1}/{QUESTIONS.length}
            </Number>

            <Question key={QUESTIONS[currentQuestion].id}>
              {QUESTIONS[currentQuestion].text}
            </Question>
            <Answers>
              {QUESTIONS[currentQuestion].answers.map((answer) => (
                <Answer
                  key={answer.id}
                  answer={answer}
                  handleClick={() => handleClick(answer.id)}
                />
              ))}
            </Answers>
          </Content>

          <Navigation>
            <IconButton
              onClick={onLeft}
              size="large"
              style={{ color: "#1976d2" }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              onClick={onRight}
              size="large"
              style={{ color: "#1976d2" }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Navigation>
        </>
      )}
    </>
  );
};
export default MainPage;
