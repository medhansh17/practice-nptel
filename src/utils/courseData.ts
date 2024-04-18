interface courseData {
  courseId: number;
  course_name: string;
  data: {
    module: number;
    questions: {
      question: string;
      options: string[];
      answer: number[];
    }[];
  }[];
}

const courseQuestions: courseData[] = [
  {
    courseId: 1,
    course_name: "Forest",
    data: [
      {
        module: 1,
        questions: [
          {
            question: "Tropical moist forests do not include",
            options: [
              "A. Broadleaved forests",
              "B. Wet evergreen forests",
              "C. Semi-evergreen forests",
              "D. Moist deciduous forests",
            ],
            answer: [0],
          },
          {
            question: "Which of these is not a use value?",
            options: [
              "A. Direct value",
              "B. Indirect value",
              "C. Option value",
              "D. Existence value",
            ],
            answer: [3],
          },
          {
            question:
              "The value derived from the knowledge of use of resources by others in the current generation is called",
            options: [
              "A. Altruistic value",
              "B. Bequest value",
              "C. Existence value",
              "D. Option value",
            ],
            answer: [0],
          },
          {
            question: "Montane sub-tropical forests do not involve",
            options: [
              "A. Broadleaved forests",
              "B. Pine forests",
              "C. Semi-evergreen forests",
              "D. Dry evergreen forests",
            ],
            answer: [2],
          },
          {
            question:
              "'Plant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy' is",
            options: [
              "A. Silviculture definition of forests",
              "B. FAO definition of forests",
              "C. Legal definition of forests",
              "D. Ecological definition of forests",
            ],
            answer: [3],
          },
          {
            question: "Which of these is not a consumptive value?",
            options: [
              "A. Timber",
              "B. Firewood",
              "C. Non-timber forest products",
              "D. Education",
            ],
            answer: [3],
          },
          {
            question: "The term 'forest' originates from",
            options: [
              "A. Latin foris meaning outside",
              "B. Greek foris meaning outside",
              "C. Latin foris meaning trees",
              "D. Greek foris meaning trees",
            ],
            answer: [0],
          },
          {
            question:
              "The value of leaving use and non-use values for offspring's or future generation is called",
            options: [
              "A. Altruistic value",
              "B. Bequest value",
              "C. Existence value",
              "D. Option value",
            ],
            answer: [1],
          },
          {
            question: "Which of these is not a forest type found in India?",
            options: [
              "A. Mediterranean dry",
              "B. Tropical dry",
              "C. Montane temperate",
              "D. Alpine",
            ],
            answer: [0],
          },
          {
            question:
              "According to the Supreme Court, the term forest land includes",
            options: [
              "A. Some area recorded as forest in the government record according to ownership",
              "B. Any area recorded as forest in the government record according to ownership",
              "C. Some area recorded as forest in the government record irrespective of ownership",
              "D. Any area recorded as forest in the government record irrespective of ownership",
            ],
            answer: [3],
          },
        ],
      },
    ],
  },
];

export default courseQuestions;
