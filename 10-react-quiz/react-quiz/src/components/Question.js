import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { question } = useQuiz();
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">{<Options />}</div>
    </div>
  );
}

export default Question;
