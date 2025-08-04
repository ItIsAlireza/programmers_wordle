export const handleKeyPress = ({
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
}) => {
  if (!word) return;

  if (clickedKey === "DELETE") {
    setCurrentWord((prev) => prev.slice(0, -1));
    return;
  }

  if (clickedKey.length === 1 && currentWord.length < 5) {
    setCurrentWord((prev) => prev + clickedKey.toUpperCase());
    return;
  }

  if (clickedKey === "ENTER" && currentWord.length === 5) {
    const guess = currentWord.toUpperCase();
    const target = word.toUpperCase();

    setGuesses((prev) => {
      const updated = [...prev];
      updated[currentGuessIndex] = guess;
      return updated;
    });

    setLetterStates((prev) => {
      const newStates = { ...prev };
      for (let i = 0; i < 5; i++) {
        const ch = guess[i];
        if (target[i] === ch) {
          newStates[ch] = "green";
        } else if (target.includes(ch)) {
          if (newStates[ch] !== "green") newStates[ch] = "yellow";
        } else {
          if (!newStates[ch]) newStates[ch] = "gray";
        }
      }
      return newStates;
    });

    if (guess === target) {
      setIsGameWon(true);
      setIsGameOver(true);
    } else if (currentGuessIndex === 5) {
      setIsGameOver(true);
    }

    setCurrentWord("");
    setCurrentGuessIndex((prev) => prev + 1);
  }
};
