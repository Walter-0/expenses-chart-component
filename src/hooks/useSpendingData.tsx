import { useState, useEffect } from "react";
const data = [
  {
    day: "mon",
    amount: 1745,
  },
  {
    day: "tue",
    amount: 3491,
  },
  {
    day: "wed",
    amount: 5236,
  },
  {
    day: "thu",
    amount: 3107,
  },
  {
    day: "fri",
    amount: 2339,
  },
  {
    day: "sat",
    amount: 4328,
  },
  {
    day: "sun",
    amount: 2548,
  },
];

interface SpendingData {
  day: string;
  amount: number;
}

export default function useSpendingData() {
  const [spendingData, setSpendingData] = useState<SpendingData[]>([]);

  useEffect(() => {
    setSpendingData(data);
  }, []);

  return spendingData;
}
