import exercises from '../data/exercises.json';

export const fetchExercises = async () => {
  try {
    // Simulate an async operation
    return new Promise((resolve) => {
      setTimeout(() => resolve(exercises), 500); // Simulate a delay
    });
  } catch (error) {
    console.error('Error reading exercises:', error);
    return [];
  }
};
