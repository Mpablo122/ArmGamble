import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        width: '300px',
        textAlign: 'center',
      }}
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h3>{exercise.name}</h3>
      <p>Target: {exercise.target}</p>
      <p>Equipment: {exercise.equipment}</p>
    </div>
  );
};

export default ExerciseCard;