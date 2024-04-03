import restaurantsService from '../../services/exercises.service';

const LoaderRestaunrantsPage = async () => {
  const restaurants = await restaurantsService.getAllRestaurants();

  return restaurants;
};

export default LoaderRestaunrantsPage;
