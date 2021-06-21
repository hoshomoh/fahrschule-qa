export const questions = [
  {
    question: "You are travelling at 50km/h and have a reaction time of 1 second. What is the reaction distance according to the rule of thumb?",
    type: "string",
    answer: "15",
    answer_in: "meters",
    explanation: "Reaction distance is (speed)/10 * 3. That means at 50km/h, reaction distance is (50)/10 * 3 = 15 meters",
    tag: ['number', 'formular'],
  },
  {
    question: "What is the maximum speed you are allowed to drive a car on roads with one marked lane for each direction outside of a built up area?",
    type: "string",
    answer: "100",
    answer_in: "km/h",
    explanation: "For vehicles up tp 3.5tonnes of gross vehicle weight and without a trailer, the maximum speed limit is 100km/h.",
    tag: ['number'],
  },
  {
    question: "What is the maximum speed a truck with a permissible total mass of 3.0tonnes and a trailer may ne driven on autobahn?",
    type: "string",
    answer: "80",
    answer_in: "km/h",
    explanation: "For vehicles up tp 3.5tonnes of gross vehicle weight and with a trailer, the maximum speed limit is 80km/h on autobahns.",
    tag: ['number'],
  },
];

export default questions;
