export default function Test({
  question,
  answers,
  correctAnswer,
  loadNextQuestion,
}: {
  question: string;
  answers: string[];
  correctAnswer: number[];
  loadNextQuestion: (ans: boolean) => void;
}) {
  // Function to shuffle array
  const shuffleArray = (array: any[]) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  const shuffledAnswers = shuffleArray(answers);
  const handleAnswerSelection = (e: any, selectedAnswerIndex: number) => {
    correctAnswer.map((ans) =>
      document.getElementById(`${ans}`)?.classList.add("bg-green-500")
    );
    if (correctAnswer.includes(selectedAnswerIndex)) {
      e.target.classList.add("bg-green-500");
      setTimeout(() => {
        correctAnswer.map((ans) =>
          document.getElementById(`${ans}`)?.classList.remove("bg-green-500")
        );
        e.target.classList.remove("bg-green-500");
        loadNextQuestion(true);
      }, 1000);
    } else {
      e.target.classList.add("bg-red-500");
      setTimeout(() => {
        correctAnswer.map((ans) =>
          document.getElementById(`${ans}`)?.classList.remove("bg-green-500")
        );
        e.target.classList.remove("bg-red-500");
        loadNextQuestion(false);
      }, 1000);
    }
  };

  const buttonComponent = (answer: string, index: number) => (
    <button
      key={index}
      id={`${index}`}
      onClick={(e) => handleAnswerSelection(e, index)}
      className="p-2 px-4 border border-gray-400 rounded-md"
    >
      {answer}
    </button>
  );

  return (
    <div className="min-h-screen w-screen flex justify-center items-center sm:text-3xl text-lg p-4">
      <div>
        <p className="mb-[35px] text-center">{question}</p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:text-xl text-sm text-center">
          {shuffledAnswers.map((answer, index) =>
            buttonComponent(answer, answers.indexOf(answer))
          )}
        </div>
      </div>
    </div>
  );
}
