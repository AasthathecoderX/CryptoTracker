import React, { useState } from "react";
import "./CryptoProfitCalculator.css";
import Header from "../components/Common/Header";
import CryptoProfitCalculatorInfo from "../components/CryptoProfitCalculatorInfo";
import SecuritySection from "../components/SecuritySection/SecuritySection";

function CryptoProfitCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [result, setResult] = useState(null);

  const calculateProfitOrLoss = () => {
    if (!initialInvestment || !buyPrice || !currentPrice) {
      alert("Please fill in all fields.");
      return;
    }

    const profitOrLoss = ((currentPrice - buyPrice) / buyPrice) * 100;
    const profitOrLossAmount = (initialInvestment * profitOrLoss) / 100;
    setResult({
      percentage: profitOrLoss.toFixed(2),
      amount: profitOrLossAmount.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        {/* Box Container */}
        <div className="calculator-box bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-md w-full border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 text-center">
            Crypto Profit Calculator
          </h2>
          <div className="input-container mb-4">
            <label className="block text-gray-600 dark:text-gray-300 mb-2">
              Initial Investment ($)
            </label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="w-full p-2 border text-gray-800 dark:text-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="input-container mb-4">
            <label className="block text-gray-600 dark:text-gray-300 mb-2">Buy Price ($)</label>
            <input
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              className="w-full p-2 border text-gray-800 dark:text-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="input-container mb-4">
            <label className="block text-gray-600 dark:text-gray-300 mb-2">Current Price ($)</label>
            <input
              type="number"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
              className="w-full p-2 border text-gray-800 dark:text-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            onClick={calculateProfitOrLoss}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
          >
            Calculate
          </button>
  
          {result && (
            <div className="result-box mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-600">
              <p className="text-lg dark:text-gray-300 font-medium">
                Profit/Loss Percentage:{" "}
                <span className={result.percentage >= 0 ? "text-green-400" : "text-red-400"}>
                  {result.percentage}%
                </span>
              </p>
              <p className="text-lg dark:text-gray-300 font-medium">
                Profit/Loss Amount:{" "}
                <span className={result.amount >= 0 ? "text-green-400" : "text-red-400"}>
                  ${result.amount}
                </span>
              </p>
            </div>
            
          )}
        </div>
      </div>
      <CryptoProfitCalculatorInfo />
      <SecuritySection />
    </div>
  );
  
 
}

export default CryptoProfitCalculator;
