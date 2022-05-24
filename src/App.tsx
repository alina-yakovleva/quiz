import { useState } from "react";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";
import { Section, Container } from "./styles";

function App() {
  const [state, setState] = useState(true);

  const startTest = () => {
    setState(false);
  };

  return (
    <div className="App">
      <Container>
        <Section>
          {state ? <StartPage startTest={startTest} /> : <MainPage />}
        </Section>
      </Container>
    </div>
  );
}

export default App;
