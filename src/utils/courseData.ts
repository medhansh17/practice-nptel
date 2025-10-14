export interface courseData {
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

// {
//     "module": 0,
//     "questions": [
//         {
//             "question": "Transplantation experiments are used to find",
//             "options": [
//                 "potential range",
//                 "effective range",
//                 "actual range",
//                 "economic range"
//             ],
//             "answer": [
//                 0
//             ]
//         },
//         {
//             "question": "Which of these is not a characteristic of fitness?",
//             "options": [
//                 "Fitness is environment-specific.",
//                 "Fitness is species-specific.",
//                 "Higher reproductive rate means higher fitness.",
//                 "Fitness should be measured across several generations."
//             ],
//             "answer": [
//                 2
//             ]
//         },
//         {
//             "question": "The hierarchical system was given by",
//             "options": [
//                 "Simon",
//                 "Watson",
//                 "Hutchinson",
//                 "Humboldt"
//             ],
//             "answer": [
//                 0
//             ]
//         },
//         {
//             "question": "Hamilton's rule can be stated as",
//             "options": [
//                 "rB < C",
//                 "rB > C",
//                 "rB = C",
//                 "rB + C = 0"
//             ],
//             "answer": [
//                 1
//             ]
//         },
//         {
//             "question": "Consider the food chain: Grass → Grasshopper → Frog → Snake → Hawk. As we move up the food chain,",
//             "options": [
//                 "available energy decreases",
//                 "available energy increases",
//                 "available energy remains same",
//                 "available energy is zero everywhere"
//             ],
//             "answer": [
//                 0
//             ]
//         },
//         {
//             "question": "The logistic growth equation, when plotted, appears",
//             "options": [
//                 "I shaped",
//                 "J shaped",
//                 "S shaped",
//                 "O shaped"
//             ],
//             "answer": [
//                 2
//             ]
//         },
//         {
//             "question": "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
//             "options": [
//                 "climatic climax",
//                 "edaphic climax",
//                 "disclimax",
//                 "catastrophic climax"
//             ],
//             "answer": [
//                 2
//             ]
//         },
//         {
//             "question": "\"Quick movement over large distances, often across unsuitable terrain\" is a description of",
//             "options": [
//                 "diffusion",
//                 "secular dispersal",
//                 "jump dispersal",
//                 "drifting"
//             ],
//             "answer": [
//                 2
//             ]
//         },
//         {
//             "question": "Captive breeding is an example of",
//             "options": [
//                 "in-situ conservation",
//                 "ex-situ conservation",
//                 "in-situ preservation",
//                 "ex-situ preservation"
//             ],
//             "answer": [
//                 1
//             ]
//         },
//         {
//             "question": "The demographic transition sees a society move from",
//             "options": [
//                 "high birth rate, low death rate to low birth rate, low death rate",
//                 "low birth rate, high death rate to low birth rate, low death rate",
//                 "high birth rate, high death rate to low birth rate, low death rate",
//                 "high birth rate, high death rate to low birth rate, high death rate"
//             ],
//             "answer": [
//                 2
//             ]
//         }
//     ]
// },
