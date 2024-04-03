import exercisesService from '../../services/exercises.service';

const LoaderExercisesPage = async () => {
  const exercises = await exercisesService.getAllExercises();

  return exercises;
};

export default LoaderExercisesPage;
