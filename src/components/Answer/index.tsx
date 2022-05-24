import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { FC } from "react";
import { IAnswer } from "../../type";

interface AnswersProps {
  answer: IAnswer;
  handleClick: (id: number) => void;
}

const Answer: FC<AnswersProps> = ({ answer, handleClick }) => {
  return (
    <List>
      <ListItemButton
        style={{
          textAlign: "center",
        }}
      >
        <ListItemText onClick={() => handleClick(answer.id)}>
          {answer.text}
        </ListItemText>
      </ListItemButton>
    </List>
  );
};
export default Answer;
