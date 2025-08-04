import { useState, useEffect } from "react";
import { loadWordList } from "../utils/load_word";

export const useWordleGame = () => {
  const [word, setWord] = useState(null);
  const [guesses, setGuesses] = useState([" ", " ", " ", " ", " ", " "]);
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [letterStates, setLetterStates] = useState({});

  useEffect(() => {
    loadWordList().then(setWord);
  }, []);

  return {
    word,
    setWord,
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
  };
};