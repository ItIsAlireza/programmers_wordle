export const getLetterStatus = (char, solution, index) => {
  if (!char) return "";

  if (char === solution[index].toUpperCase()) {
    return "bg-green-600";
  } else if (solution.toUpperCase().includes(char)) {
    return "bg-yellow-600";
  } else {
    return "bg-slate-700";
  }
};