import styled from "@emotion/styled";
import { Box, Button, ListItemText, Paper, Typography } from "@mui/material";

// StartPage

export const StartButton = styled(Button)({
  marginTop: "70px",
  fontSize: "28px",
});

// MainPage

export const Container = styled(Paper)({
  margin: "0 auto",

  width: "700px",
  minHeight: "400px",

  padding: "30px",

  color: "#1976d2",
});

export const Section = styled(Box)({
  textAlign: "center",
});

export const Content = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const Number = styled(Box)({
  fontSize: "25px",
});

export const Question = styled(Box)({
  fontSize: "30px",
});

export const Answers = styled(Box)({
  display: "flex",
  flexDirection: "column",

  gap: "40px",
  width: "100%",
});

export const Navigation = styled(Box)({
  display: "flex",
  justifyContent: "space-between",

  alignItems: "center",
  marginTop: "70px",
  color: "#1976d2",
});
