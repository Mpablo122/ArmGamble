import React, { useState } from 'react';

const ExerciseCard = ({ exercise }) => {
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);

  const handleSetChange = (e) => setSets(e.target.value);
  const handleRepChange = (e) => setReps(e.target.value);

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
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}
      />
      <h3 style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>{exercise.name}</h3>
      <p><strong>Target:</strong> {exercise.target}</p>
      <p><strong>Equipment:</strong> {exercise.equipment}</p>
      <p><strong>Body Part:</strong> {exercise.bodyPart}</p>

      <div style={{ marginTop: '1rem' }}>
        <label>
          Sets:
          <input
            type="number"
            value={sets}
            onChange={handleSetChange}
            style={{ marginLeft: '0.5rem', width: '50px' }}
          />
        </label>
        <br />
        <label>
          Reps:
          <input
            type="number"
            value={reps}
            onChange={handleRepChange}
            style={{ marginLeft: '0.5rem', width: '50px' }}
          />
        </label>
      </div>
    </div>
  );
};

export default ExerciseCard;
