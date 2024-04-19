"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import courseQuestions from "@/utils/courseData";
import Test from "@/components/test";
interface data {
  courseId: string | null;
  mode: string | null;
  syllabus: string | null;
}

interface question {
  question: string;
  options: string[];
  answer: number[];
}

export default function Quiz() {
  const [data, setData] = useState<data>();
  const router = useRouter();
  const [remainingQuestions, setRemainingQuestions] = useState<question[]>(
    [] as question[]
  );
  const [currentQuestion, setCurrentQuestion] = useState<question>(
    {} as question
  );
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [any, setAny] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const courseId = params.get("courseId");
    const mode = params.get("mode");
    const syllabus = params.get("syllabus");
    const data = {
      courseId: courseId,
      mode: mode,
      syllabus: syllabus,
    };
    setData(data);
  }, []);

  useEffect(() => {
    if (data === undefined) {
      return;
    }
    if (
      data?.mode === null ||
      data?.syllabus === null ||
      data?.courseId === null
    ) {
      router.replace("/");
    }
    const array = courseQuestions
      .filter((course) => course.courseId === Number(data.courseId))[0]
      .data.filter(
        (question) => question.module === Number(data.syllabus)
      )[0].questions;
    const shuffledArray = shuffleArray(array);
    setTotal(shuffledArray.length);
    setRemainingQuestions(shuffledArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const loadNextQuestion = (ans: boolean) => {
    if (ans === true) {
      console.log("Correct");
      if (score === 0) {
        setScore(1);
        setAny(true);
      } else {
        setScore(score + 1);
      }
    }
    console.log(score);
    if (remainingQuestions.length === 0) {
      const s = score;
      if (any === false) {
        router.replace(`/result?score=${score}&total=${total}`);
      } else {
        router.replace(`/result?score=${score + 1}&total=${total}`);
      }
    }
    setCurrentQuestion(remainingQuestions.shift() || ({} as question));
  };

  useEffect(() => {
    if (remainingQuestions.length === 0) {
      return;
    }
    loadNextQuestion(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingQuestions]);

  useEffect(() => {
    displayQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);

  const displayQuestion = () => {
    return (
      <div>
        <Test
          question={currentQuestion?.question || " "}
          answers={currentQuestion?.options || []}
          correctAnswer={currentQuestion?.answer || []}
          loadNextQuestion={loadNextQuestion}
        />
      </div>
    );
  };

  function shuffleArray<T>(data: T[]): T[] {
    const shuffledArray = [...data].sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  return <div>{displayQuestion()}</div>;
}
