import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseList = ({ exercises }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        padding: '2rem',
        justifyContent: 'center',
      }}
    >
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;
