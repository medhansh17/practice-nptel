"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Test from "@/components/test";
import Head from "next/head";
import type { courseData as CourseData } from "@/utils/courseData";

// Your interfaces remain the same
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
  const [remainingQuestions, setRemainingQuestions] = useState<question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<question>(
    {} as question
  );
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [end, setEnd] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

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
    if (!data?.courseId || !data.syllabus || !data.mode) {
      if (data && (!data.courseId || !data.syllabus || !data.mode)) {
        router.replace("/");
      }
      return;
    }

    const fetchAndProcessData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/data/${data.courseId}.json`);
        if (!response.ok) {
          throw new Error("Course not found");
        }
        const courseData: CourseData = await response.json();

        let array: question[] = [];
        if (data.syllabus === "full") {
          array = courseData.data.map((module) => module.questions).flat();
        } else if (data.syllabus === "first-half") {
          array = courseData.data
            .filter((module) => module.module <= courseData.data.length / 2)
            .map((module) => module.questions)
            .flat();
        } else if (data.syllabus === "second-half") {
          array = courseData.data
            .filter((module) => module.module >= courseData.data.length / 2)
            .map((module) => module.questions)
            .flat();
        } else {
          const moduleData = courseData.data.find(
            (m) => m.module === Number(data.syllabus)
          );
          array = moduleData ? moduleData.questions : [];
        }

        if (array.length === 0) {
          console.error("No questions found for this syllabus.");
          router.replace("/");
          return;
        }

        const shuffledArray = shuffleArray(array);
        setTotal(shuffledArray.length);
        setRemainingQuestions(shuffledArray);
        setCurrentQuestion(shuffledArray[0]);
      } catch (error) {
        console.error("Failed to load course data:", error);
        router.replace("/");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndProcessData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const loadNextQuestion = (ans: boolean) => {
    let currentScore = score;
    if (ans === true) {
      currentScore += 1;
      setScore(currentScore);
    }

    const newRemainingQuestions = remainingQuestions.slice(1);

    if (ans === false && data?.mode === "practice") {
      const wrongQuestion = remainingQuestions[0];
      setRemainingQuestions(
        shuffleArray([...newRemainingQuestions, wrongQuestion])
      );
    } else {
      setRemainingQuestions(newRemainingQuestions);
    }

    if (newRemainingQuestions.length === 0) {
      setEnd(true);
    } else {
      setCurrentQuestion(newRemainingQuestions[0]);
    }
  };

  function shuffleArray<T>(data: T[]): T[] {
    const shuffledArray = [...data].sort(() => Math.random() - 0.5);
    return shuffledArray;
  }

  if (isLoading) {
    return <div>Loading Quiz...</div>;
  }

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4918739620805879"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div>
        {currentQuestion.question && (
          <Test
            question={currentQuestion.question}
            answers={currentQuestion.options}
            correctAnswer={currentQuestion.answer}
            loadNextQuestion={loadNextQuestion}
          />
        )}
      </div>
    </>
  );
}
