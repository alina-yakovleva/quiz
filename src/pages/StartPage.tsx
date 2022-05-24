import { Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router";

import { StartButton } from "../styles";
interface StartPageProps {
  startTest: () => void;
}
const StartPage: FC<StartPageProps> = ({ startTest }) => {
  return (
    <>
      <Typography variant="h3">Тест на знание столиц мира</Typography>
      <Typography variant="h6">Тест из 5 вопросов</Typography>
      <StartButton onClick={startTest} variant="contained">
        Начать тест!
      </StartButton>
    </>
  );
};
export default StartPage;
