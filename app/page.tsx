"use client";
import { ChangeEvent, useState } from "react";
const RatioCalculator = () => {
  type initialStateTypes = {
    value: string;
    profit: string;
    loss: string;
    ratioResult: null | string;
  };
  const initialState = {
    value: "1000",
    profit: "2",
    loss: "1",
    ratioResult: null,
  };

  const [values, setValues] = useState<initialStateTypes>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const handleCalculate = () => {
    const { value, profit, loss } = values;
    const invalidInput = "Invalid Input";
    if (value === "" || loss === "" || loss === "")
      return setValues({
        ...values,
        ratioResult: invalidInput,
      });
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
    setValues({
      ...values,
      ratioResult: `${firstLine} ${secondLine} ${thirdLine} ${fourthLine}`,
    });
  };
  const { value, profit, loss, ratioResult } = values;

  const inputFields = [
    { id: "value", label: "Value", placeholder: "Enter value", value },
    { id: "profit", label: "Profit (1-10)", placeholder: "Enter profit", value: profit },
    { id: "loss", label: "Loss (1-10)", placeholder: "Enter loss", value: loss },
  ];
  const renderInputs = inputFields.map((field) => (
    <div className="mb-4" key={field.id}>
      <label htmlFor={field.id} className="block text-sm font-medium text-white-700 mb-1">
        {field.label}
      </label>
      <input
        type="number"
        id={field.id}
        min="1"
        max="10"
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight w-full focus:shadow-outline"
        value={field.value}
        placeholder={field.placeholder}
        onChange={handleChange}
      />
      {field.id !== "value" && (
        <p className="text-xs text-gray-500">Enter a value between 1 and 10 for {field.label}</p>
      )}
    </div>
  ));

  return (
    <main className="w-full max-w-lg mx-auto h-screen flex items-center justify-center flex-col gap-4 p-2">
      <h2>Ratio Calculator</h2>
      {renderInputs}
      <div className="mb-4">
        <button
          onClick={handleCalculate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline"
        >
          Calculate Ratio
        </button>
      </div>
      {ratioResult && <div className="text-sm text-white-700" dangerouslySetInnerHTML={{ __html: ratioResult }} />}
    </main>
  );
};

export default RatioCalculator;
