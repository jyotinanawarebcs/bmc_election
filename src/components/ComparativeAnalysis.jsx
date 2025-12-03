import React from "react";

export default function ComparativeAnalysis() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-sm mt-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Comparative Analysis: Priya Sharma
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Vote Margin</h3>
          <p className="text-2xl font-bold text-green-700">+5,120</p>
          <p className="text-gray-500 text-sm mt-1">
            Margin increased by 1,200 votes in final hours of counting.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Turnout % (Strong Areas)
          </h3>
          <p className="text-2xl font-bold text-blue-700">68.5%</p>
          <p className="text-gray-500 text-sm mt-1">
            Opponent’s areas saw a lower turnout of 61.2%.
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">
            Cross-Segment Correlation
          </h3>
          <p className="text-2xl font-bold text-yellow-700">0.78</p>
          <p className="text-gray-500 text-sm mt-1">
            Strong correlation with youth voters (18–25).
          </p>
        </div>
      </div>
    </section>
  );
}
