"use client";
import { ChangeEvent, useState } from "react";
const RatioCalculator = () => {
  const [value, setValue] = useState("1000");
  const [profit, setProfit] = useState("2");
  const [loss, setLoss] = useState("1");
  const [ratioResult, setRatioResult] = useState<string | null>(null);

  const handleCalculate = () => {
    const finalProfit = Number(profit);
    const finalTotal = Number(profit) + Number(loss);
    const finalProfitPer = ((finalProfit * 100) / finalTotal).toFixed(2);
    const finalLoss = Number(loss);
    const finalLossPer = ((finalLoss * 100) / finalTotal).toFixed(2);
    const showProfit = Math.round((+finalProfitPer * +value) / 100);
    const showLoss = Math.round((+finalLossPer * +value) / 100);
    const firstLine = `<p>If you take 10 trades with ${value}</p>`;
    const secondLine = `<p>and You profit  ${showProfit} with win-percentage of ${finalProfitPer} % </p>`;
    const thirdLine = `<p>and rest ${showLoss} losses you ${finalLossPer} % </p>`;
    const fourthLine = `<p>Then your stratgy is ${finalProfitPer} % profitable.</p>`;
    setRatioResult(`${firstLine} ${secondLine} ${thirdLine} ${fourthLine}`);
  };

  return (
    <main className="w-full max-w-lg mx-auto h-screen flex items-center justify-center flex-col gap-4 p-2">
      <h2>Ratio Calculator</h2>
      <div className="mb-4">
        <label htmlFor="value" className="block text-sm font-medium text-white-700 mb-1">
          Value
        </label>
        <input
          type="number"
          id="value"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="profit" className="block text-sm font-medium text-white-700 mb-1">
          Profile (1-10)
        </label>
        <input
          type="number"
          id="profit"
          min="1"
          max="10"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={profit}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setProfit(e.target.value)}
        />
        <p className="text-xs text-gray-500">Enter a value between 1 and 10 for Profit</p>
      </div>
      <div className="mb-4">
        <label htmlFor="loss" className="block text-sm font-medium text-white-700 mb-1">
          Loss (1-10)
        </label>
        <input
          type="number"
          id="loss"
          min="1"
          max="10"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={loss}
          onChange={(e) => setLoss(e.target.value)}
        />
        <p className="text-xs text-gray-500">Enter a value between 1 and 10 for Loss</p>
      </div>
      <div className="mb-4">
        <button
          onClick={handleCalculate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calculate Ratio
        </button>
      </div>
      {ratioResult && <div className="text-sm text-white-700" dangerouslySetInnerHTML={{ __html: ratioResult }} />}
    </main>
  );
};

export default RatioCalculator;
