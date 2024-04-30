import AnswerModel from "@/model/answer";
import QuestionModel from "@/model/question";
import { useEffect, useState } from "react";
import Quiz from "@/components/Quiz";
import { useRouter } from "next/router";

const BASE_URL = "http://localhost:3000/api";
export default function Home() {
  const router = useRouter();

  const [question, setQuestion] = useState<QuestionModel>();
  const [questionIds, setQuestionsIds] = useState<number[]>([]);
  const [rightAnswers, setRightAnswers] = useState(0);
  async function loadQuestionsIds() {
    try {
      const resp = await fetch(`${BASE_URL}/quiz`);
      const ids = await resp.json();
      setQuestionsIds(ids);
    } catch (e) {
      console.log(e);
    }
  }
  async function loadQuestion(idQuestion: number) {
    try {
      const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
      const json = await resp.json();
      const newQuestion = QuestionModel.createUsingObject(json);
      setQuestion(newQuestion);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0]);
  }, [questionIds]);

  function anseweredQuestion(questionAnsewered: QuestionModel): void {
    setQuestion(questionAnsewered);
    const isRight = questionAnsewered.isCorrect;
    setRightAnswers(rightAnswers + (isRight ? 1 : 0));
  }

  function idNextQuestion(): number | undefined {
    if (question) {
      const nextIndex = questionIds.indexOf(question.id) + 1;
      return questionIds[nextIndex];
    }
    return undefined;
  }

  function goToNextStep(): void {
    const nextId = idNextQuestion();
    nextId ? goToNextQuestion(nextId) : finish();
  }

  function goToNextQuestion(idNext: number): void {
    loadQuestion(idNext);
  }

  function finish(): void {
    router.push({
      pathname: "/result",
      query: {
        total: questionIds.length,
        right: rightAnswers,
      },
    });
  }

  return question ? (
    <Quiz
      question={question}
      last={idNextQuestion() === undefined}
      anseweredQuestion={anseweredQuestion}
      goToNextStep={goToNextStep}
    />
  ) : (
    false
  );
}
