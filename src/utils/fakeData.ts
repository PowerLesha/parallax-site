export type RowData = {
  model: string;
  average: number;
  truthfulQA: number;
  earnings: string;
  trend?: "up" | "down" | null;
};

export const fakeData: RowData[] = [
  {
    model: "GPT-4",
    average: 92,
    truthfulQA: 89,
    earnings: "$1,200,000",
    trend: "up",
  },
  {
    model: "Claude",
    average: 88,
    truthfulQA: 85,
    earnings: "$950,000",
    trend: "down",
  },
  {
    model: "PaLM 2",
    average: 90,
    truthfulQA: 87,
    earnings: "$1,100,000",
    trend: null,
  },
  {
    model: "LLaMA",
    average: 84,
    truthfulQA: 82,
    earnings: "$780,000",
    trend: "up",
  },
  {
    model: "Bard",
    average: 86,
    truthfulQA: 83,
    earnings: "$810,000",
    trend: "down",
  },
  {
    model: "Vicuna",
    average: 80,
    truthfulQA: 78,
    earnings: "$650,000",
    trend: null,
  },
];
