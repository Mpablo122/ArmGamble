import React, { useEffect, useState } from 'react';
import { fetchExercises } from '../Services/exerciseAPI';
import ExerciseList from '../components/ExerciseList';
import Musclegroupfilter from '../components/Musclegroupfilter';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [loading, setLoading] = useState(true);

  const muscleGroups = [
    'chest',
    'back',
    'shoulders',
    'biceps',
    'triceps',
    'legs',
    'abs',
    'core',
    'full body',
  ];

  useEffect(() => {
    const getExercises = async () => {
      try {
        const data = await fetchExercises();
        setExercises(data);
        setFilteredExercises(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    getExercises();
  }, []);

  useEffect(() => {
    if (selectedGroup === '') {
      setFilteredExercises(exercises);
    } else {
      const filtered = exercises.filter(
        (exercise) => exercise.target.toLowerCase() === selectedGroup.toLowerCase()
      );
      setFilteredExercises(filtered);
    }
  }, [selectedGroup, exercises]);

  if (loading) return <p style={{ padding: '1rem' }}>Loading exercises...</p>;

  return (
    <div>
      <Musclegroupfilter
        muscleGroups={muscleGroups}
        selectedGroup={selectedGroup}
        onSelectGroup={setSelectedGroup}
      />
      <ExerciseList exercises={filteredExercises} />
    </div>
  );
};

export default Home;
