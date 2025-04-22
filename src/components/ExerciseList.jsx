import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseList = ({ exercises }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;