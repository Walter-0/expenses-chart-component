import useSpendingData from "../hooks/useSpendingData";
import Bar from "./Bar";

interface ChartProps {
  monthlyTotal: number; // denoted in cents for simplicity
  percentChange: number;
}

const Chart: React.FC<ChartProps> = ({ monthlyTotal, percentChange }) => {
  const spendingData = useSpendingData();

  return (
    <div className="w-full max-w-[343px] rounded-xl bg-white p-4 lg:max-w-[540px] lg:p-8">
      <h2 className="text-2xl font-bold text-dark-brown">
        Spending - Last 7 days
      </h2>

      <div className="mt-8 flex items-end justify-between">
        {spendingData.map((data) => (
          <Bar key={data.day} amount={data.amount} day={data.day} />
        ))}
      </div>

      <hr className="my-4 border border-cream" />

      <div className="flex items-end justify-between">
        <div>
          <p className="text-medium-brown">Total this month</p>
          <p className="text-2xl font-bold text-dark-brown lg:text-4xl">
            ${monthlyTotal / 100}
          </p>
        </div>
        <div>
          <p className="text-right font-bold text-dark-brown">
            +{percentChange * 100}%
          </p>
          <p className="text-medium-brown">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
