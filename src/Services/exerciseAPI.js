// src/services/exerciseAPI.js
const EXERCISE_URL = 'https://raw.githubusercontent.com/drksv/free-exercise-gym/main/exercises.json';

export const fetchExercises = async () => {
  try {
    const response = await fetch(EXERCISE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch exercises');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
