"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import courseQuestions from "@/utils/courseData";
import Test from "@/components/test";

interface QuizData {
  courseId: string | null;
  mode: string | null;
  syllabus: string | null;
}

interface Question {
  question: string;
  options: string[];
  answer: number[];
}

export default function Quiz() {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [remainingQuestions, setRemainingQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("courseId");
    const mode = params.get("mode");
    const syllabus = params.get("syllabus");

    if (!courseId || !mode || !syllabus) {
      router.replace("/");
    } else {
      setQuizData({ courseId, mode, syllabus });
    }
  }, [router]);

  useEffect(() => {
    if (!quizData) return;

    const selectedCourse = courseQuestions.find(course => course.courseId === Number(quizData.courseId));
    if (!selectedCourse) return;

    const selectedModule = selectedCourse.data.find(module => module.module === Number(quizData.syllabus));
    if (!selectedModule) return;

    const shuffledQuestions = shuffleArray(selectedModule.questions);
    setTotalQuestions(shuffledQuestions.length);
    setRemainingQuestions(shuffledQuestions);
  }, [quizData]);

  useEffect(() => {
    if (remainingQuestions.length > 0) {
      setCurrentQuestion(remainingQuestions[0]);
    }
  }, [remainingQuestions]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setRemainingQuestions(prevQuestions => prevQuestions.slice(1));
  };

  const shuffleArray = <T,>(arr: T[]): T[] => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      {currentQuestion && (
        <Test
          question={currentQuestion.question}
          answers={currentQuestion.options}
          correctAnswer={currentQuestion.answer}
          onAnswer={handleAnswer}
        />
      )}
      {remainingQuestions.length === 0 && (
        <>
          {router.push(`/result?score=${score}&total=${totalQuestions}`)}
        </>
      )}
    </div>
  );
}
