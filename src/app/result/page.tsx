"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Page() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const score = Number(params.get("score"));
    const total = Number(params.get("total"));
    setScore(score);
    setTotal(total);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-[2rem]">
        Result {score}/{total}
      </h1>
      <button
        onClick={() => {
          router.back();
        }}
        className="absolute top-[20px] left-[20px] border border-gray-400 p-2 rounded-md cursor-hover"
      >
        Back
      </button>
    </div>
  );
}
