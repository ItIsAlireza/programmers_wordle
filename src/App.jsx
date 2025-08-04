import logo from "./assets/images/logo.png";
import GuessBox from "./components/GuessBox/GuessBox";
import Keyboard from "./components/keyboard/Keyboard";
import Modal from "./components/modal/Modal";

import { useWordleGame } from "./hooks/useWordleGame";
function App() {
  const {
    word,
    guesses,
    setGuesses,
    currentGuessIndex,
    setCurrentGuessIndex,
    currentWord,
    setCurrentWord,
    isGameWon,
    setIsGameWon,
    isGameOver,
    setIsGameOver,
    letterStates,
    setLetterStates,
  } = useWordleGame();

  if (!word)
    return <div className="text-white text-center mt-20">Loading...</div>;
  return (
    <>
      <div className="w-1/4 mx-auto mt-10">
        <img src={logo} alt="" />
      </div>

      <div className="mt-4 flex flex-col items-center">
        {guesses.map((guess, i) => (
          <GuessBox
            key={i}
            guess={i === currentGuessIndex ? currentWord : guess}
            solution={word}
            submitted={i < currentGuessIndex}
          />
        ))}
      </div>

      <Keyboard
        setGuesses={setGuesses}
        setCurrentWord={setCurrentWord}
        setCurrentGuessIndex={setCurrentGuessIndex}
        currentWord={currentWord}
        currentGuessIndex={currentGuessIndex}
        setIsGameWon={setIsGameWon}
        setIsGameOver={setIsGameOver}
        setLetterStates={setLetterStates}
        letterStates={letterStates}
        word={word}
      />

      {isGameOver && (
        <Modal onClose={() => window.location.reload()}>
          <h2 className="text-xl font-bold mb-4">
            {isGameWon ? "🎉 You Win!" : `😢 You Lost. The word was: ${word}`}
          </h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </Modal>
      )}
    </>
  );
}

export default App;
