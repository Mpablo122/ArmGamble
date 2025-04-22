import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        width: '300px',
        backgroundColor: 'white',
        textAlign: 'left',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>{exercise.name}</h3>
      <p><strong>Muscle:</strong> {exercise.muscle}</p>
      <p><strong>Type:</strong> {exercise.type}</p>
      <p><strong>Equipment:</strong> {exercise.equipment}</p>
      <p><strong>Difficulty:</strong> {exercise.difficulty}</p>
      <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>{exercise.instructions}</p>
    </div>
  );
};

export default ExerciseCard;
