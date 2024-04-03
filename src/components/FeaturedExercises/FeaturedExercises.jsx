import { Flex } from '@chakra-ui/react';
import Title from '../Title/Title';
import { useEffect, useState } from 'react';
import ExercisesGrid from '../ExercisesGrid/ExercisesGrid';
import exercisesService from '../../services/exercises.service';

const FeaturedExercises = () => {
  const [exercises, setExercises] = useState([]);

  const getSixExercises = async () => {
    try {
      const exercises = await exercisesService.getAllExercises();
  
      if (exercises) {
        setExercises(exercises.slice(0, 6));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSixExercises();
  }, []);

  return (
    <Flex width={'100%'} gap={'80px'} flexDir={'column'}>
      <Title>Featured Exercises:</Title>
      <ExercisesGrid exercises={exercises} />
    </Flex>
  );
};

export default FeaturedExercises;
