import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout"
import HomePage from "../pages/HomePage/HomePage"
import ExercisesPage from "../pages/ExercisesPage/ExercisesPage"
import LoaderExercisesPage from "../pages/ExercisesPage/LoaderExercisesPage"
import CreateExercisePage from "../pages/CreateRestaurantPage/CreateRestaurantPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import ExerciseDetailsPage from "../pages/ExerciseDetailsPage/ExerciseDetailsPage"


import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import AuthMiddleware from "../middlewares/AuthMiddleware"

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/profile",
          element: (
            <AuthMiddleware>
              <ProfilePage />
            </AuthMiddleware>
          ),
        },
        {
          path: "/exercises",
          element: <ExercisesPage />,
          loader: LoaderExercisesPage,
        },
        {
          path: "/exercises/:id",
          element: <ExerciseDetailsPage />,
        },
        {
          path: "/exercises/create",
          element: <CreateExercisePage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default AppRoutes
