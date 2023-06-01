import React from "react";
import Header from "./components/Header";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4 bg-cream px-4 lg:space-y-6 lg:p-0">
      <Header balance={92148} />
      <Chart monthlyTotal={47833} percentChange={0.024} />
    </div>
  );
}

export default App;
