import { handleKeyPress } from "./utils/keyboardHandler";
import { FIRST_ROW, SECOND_ROW, THIRD_ROW } from "./constants/keyboard";

const Keyboard = ({
  setGuesses,
  setCurrentWord,
  setCurrentGuessIndex,
  currentWord,
  currentGuessIndex,
  setIsGameWon,
  setIsGameOver,
  word,
  setLetterStates,
  letterStates,
}) => {

  const clickOp = (clickedKey) => {
    handleKeyPress({
      clickedKey,
      currentWord,
      setCurrentWord,
      word,
      setGuesses,
      currentGuessIndex,
      setCurrentGuessIndex,
      setIsGameOver,
      setIsGameWon,
      setLetterStates,
      letterStates,
    });
  };

  return (
    <div className="flex flex-col items-center gap-1 mt-10">
      <div className="grid grid-cols-10 gap-1">
        {FIRST_ROW.map((char) => (
          <KeyboardKey
            key={char}
            label={char}
            onClick={() => clickOp(char)}
            state={letterStates[char]}
          />
        ))}
      </div>
      <div className="grid grid-cols-9 gap-1 pl-5">
        {SECOND_ROW.map((char) => (
          <KeyboardKey
            key={char}
            label={char}
            onClick={() => clickOp(char)}
            state={letterStates[char]}
          />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-1">
        {THIRD_ROW.map((char) => (
          <KeyboardKey
            key={char}
            label={char}
            wide={char === "ENTER" || char === "DELETE"}
            onClick={() => clickOp(char)}
            state={letterStates[char]}
          />
        ))}
      </div>
    </div>
  );
};

const KeyboardKey = ({ label, wide = false, onClick, state }) => {
  const base =
    "h-[50px] rounded-sm flex items-center justify-center font-bold text-white";
  const width = wide ? "col-span-2" : "w-[50px]";

  let color = "bg-slate-600";
  if (state === "green") color = "bg-green-600";
  else if (state === "yellow") color = "bg-yellow-600";
  else if (state === "gray") color = "bg-slate-700";

  return (
    <div className={`${base} ${width} ${color}`} onClick={onClick}>
      <p>{label}</p>
    </div>
  );
};

export default Keyboard;
