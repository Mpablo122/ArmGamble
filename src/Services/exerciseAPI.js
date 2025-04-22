// src/services/exerciseAPI.js
const EXERCISE_URL = 'https://raw.githubusercontent.com/drksv/free-exercise-gym/main/exercises.json';

export const fetchExercises = async () => {
  const response = await fetch(EXERCISE_URL);
  const data = await response.json();
  return data;
};
