"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import courseQuestions from "@/utils/courseData";
import Test from "@/components/test";
import { set } from "firebase/database";
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
  const [end, setEnd] = useState(false);

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
    if (end === false) return;
    router.replace(`/result?score=${score}&total=${total}&mode=${data?.mode}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end]);

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
    var array = [] as question[];
    if (data.syllabus === "full") {
      array = courseQuestions
        .filter((course) => course.courseId === Number(data.courseId))[0]
        .data.map((module) => module.questions)
        .flat();
    } else if (data.syllabus === "first-half") {
      array = courseQuestions
        .filter((course) => course.courseId === Number(data.courseId))[0]
        .data.filter((question) => question.module <= 6)
        .map((module) => module.questions)
        .flat();
    } else if (data.syllabus === "second-half") {
      array = courseQuestions
        .filter((course) => course.courseId === Number(data.courseId))[0]
        .data.filter((question) => question.module >= 7)
        .map((module) => module.questions)
        .flat();
    } else {
      array = courseQuestions
        .filter((course) => course.courseId === Number(data.courseId))[0]
        .data.filter(
          (question) => question.module === Number(data.syllabus)
        )[0].questions;
    }
    const shuffledArray = shuffleArray(array);
    setTotal(shuffledArray.length);
    setRemainingQuestions(shuffledArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const loadNextQuestion = async (ans: boolean | null) => {
    if (ans === true) {
      remainingQuestions.shift();
      setScore(score + 1);
    } else if (ans === false) {
      if (data?.mode === "practice") {
        setRemainingQuestions(shuffleArray(remainingQuestions));
      } else {
        remainingQuestions.shift();
      }
    }
    if (remainingQuestions.length === 0) {
      setEnd(true);
    }
    setCurrentQuestion(remainingQuestions[0] || ({} as question));
  };

  useEffect(() => {
    if (remainingQuestions.length === 0) {
      return;
    }
    loadNextQuestion(null);
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
