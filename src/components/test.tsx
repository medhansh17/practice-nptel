export default function Test() {
  const question = "What is the full form of the name Medhansh?";
  const answers = [
    "Medhansh is the best boy in the entire universe",
    "Mehdansh",
    "Medhansh",
    "Mehdansh",
  ];
  const Correctanswer = [0, 2];
  return (
    <div className="min-h-screen w-screen flex justify-center items-center sm:text-3xl text-lg p-4">
      <div>
        <p className="mb-[35px] text-center">{question}</p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:text-xl text-sm text-center">
          {answers.map((answer, index) => (
            <button
              id={index.toString()}
              key={index}
              onClick={(e) => {
                Correctanswer.includes(index)
                  ? e.currentTarget.classList.add("border-green-500")
                  : e.currentTarget.classList.add("border-red-500");
                Correctanswer.map((correctanswer) => {
                  document
                    .getElementById(correctanswer.toString())
                    ?.classList.add("bg-green-700");
                });
              }}
              className="rounded-lg border-white border p-4"
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
