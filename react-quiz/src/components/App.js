import { useQuiz } from "../context/QuizContext";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import Loader from "./Loader";
import Error from "./Error";

import StartScreen from "./StartScreen";
import FinishScreen from "./FinishScreen";

import Progress from "./Progress";
import Question from "./Question";

import NextButton from "./NextButton";
import Timer from "./Timer";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
