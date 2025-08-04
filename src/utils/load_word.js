export async function loadWordList() {
  const response = await fetch("../public/words.json");
  const data = await response.json();
  const randomIndex = Math.floor(
    Math.random() * data.tech_programming_5letter.length
  );
  return data.tech_programming_5letter[randomIndex]; // returns an array of words
}
