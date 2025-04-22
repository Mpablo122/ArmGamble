// src/services/exerciseAPI.js
const EXERCISE_URL = 'https://mocky.io/v2/5d889c8a3300002c0ed7da42'; // Replace with a working API or mock API

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
