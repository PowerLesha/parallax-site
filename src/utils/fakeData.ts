export type RowData = {
  id: string;
  model: string;
  average: number;
  truthfulQA: number;
  earnings: string;
  trend?: "up" | "down" | null;
};

export const fakeData: RowData[] = [
  {
    id: "1",
    model: "GPT-4",
    average: 92,
    truthfulQA: 89,
    earnings: "$1,200,000",
    trend: "up",
  },
  {
    id: "2",
    model: "Claude",
    average: 88,
    truthfulQA: 85,
    earnings: "$950,000",
    trend: "down",
  },
  {
    id: "3",
    model: "PaLM 2",
    average: 90,
    truthfulQA: 87,
    earnings: "$1,100,000",
    trend: null,
  },
  {
    id: "4",
    model: "LLaMA",
    average: 84,
    truthfulQA: 82,
    earnings: "$780,000",
    trend: "up",
  },
  {
    id: "5",
    model: "Bard",
    average: 86,
    truthfulQA: 83,
    earnings: "$810,000",
    trend: "down",
  },
  {
    id: "6",
    model: "Vicuna",
    average: 80,
    truthfulQA: 78,
    earnings: "$650,000",
    trend: null,
  },
  // Duplicated with modified IDs and names
  {
    id: "7",
    model: "GPT-4 (Clone)",
    average: 92,
    truthfulQA: 89,
    earnings: "$1,000,000",
    trend: "down",
  },
  {
    id: "8",
    model: "Claude (Clone)",
    average: 88,
    truthfulQA: 85,
    earnings: "$930,000",
    trend: "up",
  },
  {
    id: "9",
    model: "PaLM 2 (Clone)",
    average: 90,
    truthfulQA: 87,
    earnings: "$990,000",
    trend: null,
  },
  {
    id: "10",
    model: "LLaMA (Clone)",
    average: 84,
    truthfulQA: 82,
    earnings: "$770,000",
    trend: null,
  },
  {
    id: "11",
    model: "Bard (Clone)",
    average: 86,
    truthfulQA: 83,
    earnings: "$800,000",
    trend: "up",
  },
  {
    id: "12",
    model: "Vicuna (Clone)",
    average: 80,
    truthfulQA: 78,
    earnings: "$640,000",
    trend: "down",
  },
];
