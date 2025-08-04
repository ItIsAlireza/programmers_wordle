import { getLetterStatus } from "@/utils/getLetterStatus";
const GuessBox = ({ guess = "", solution, submitted }) => {
  return (
    <div className="flex flex-row items-center gap-2 mt-2">
      {[0, 1, 2, 3, 4].map((i) => {
        const char = guess[i] || "";
        const status = submitted ? getLetterStatus(char, solution, i) : "";
        return (
          <div
            key={i}
            className={`w-20 h-20 border-slate-600 border-2 rounded-sm flex items-center justify-center ${status}`}
          >
            <span className="text-2xl font-bold text-white">{char}</span>
          </div>
        );
      })}
    </div>
  );
};

export default GuessBox;
