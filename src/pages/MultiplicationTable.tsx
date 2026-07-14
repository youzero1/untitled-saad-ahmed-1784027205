export default function MultiplicationTable() {
  const rows = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight">
            Multiplication Table
          </h1>
          <p className="mt-2 text-2xl font-semibold text-purple-500">of 22</p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-indigo-100">
          {/* Table Header */}
          <div className="bg-indigo-600 px-6 py-4 grid grid-cols-3 text-white font-bold text-sm uppercase tracking-widest">
            <span className="text-center">Expression</span>
            <span className="text-center">=</span>
            <span className="text-center">Result</span>
          </div>

          {/* Table Rows */}
          {rows.map((factor) => {
            const result = 22 * factor;
            const isEven = factor % 2 === 0;
            return (
              <div
                key={factor}
                className={`grid grid-cols-3 items-center px-6 py-4 transition-colors ${
                  isEven ? 'bg-indigo-50' : 'bg-white'
                } hover:bg-purple-50`}
              >
                {/* Expression */}
                <div className="text-center">
                  <span className="text-lg font-bold text-indigo-700">22</span>
                  <span className="text-lg font-medium text-gray-400 mx-2">×</span>
                  <span className="text-lg font-bold text-purple-600">{factor}</span>
                </div>

                {/* Equals */}
                <div className="text-center text-gray-400 font-semibold text-lg">=</div>

                {/* Result */}
                <div className="text-center">
                  <span className="text-xl font-extrabold text-indigo-800">{result}</span>
                </div>
              </div>
            );
          })}

          {/* Footer stripe */}
          <div className="bg-indigo-600 h-2" />
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">22 × 1 through 22 × 10</p>
      </div>
    </div>
  );
}
