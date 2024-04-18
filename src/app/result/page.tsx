"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const score = Number(params.get("score"));
    const total = Number(params.get("total"));
    setScore(score);
    setTotal(total);
  }, []);

  return (
    <div className='min-h-screen w-full flex items-center justify-center flex-col'>
      <h1 className="text-[2rem]">
        Result {score}/{total}
      </h1>
    </div>
  );
}
