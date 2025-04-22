import React, { useEffect, useState } from 'react';
import { fetchExercises } from '../Services/exerciseAPI';
import ExerciseList from '../components/ExerciseList';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExercises = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    getExercises();
  }, []);

  if (loading) {
    return <p>Loading exercises...</p>;
  }

  return (
    <div>
      <ExerciseList exercises={exercises} />
    </div>
  );
};

export default Home;