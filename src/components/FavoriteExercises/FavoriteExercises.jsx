import { Flex } from "@chakra-ui/react"
import React from "react"
import Title from "../Title/Title"
import ExercisesGrid from "../ExercisesGrid/ExercisesGrid"

const FavoriteExercises = ({ favoriteExercises }) => {
  return (
    <Flex flexDir={"column"} gap={"80px"}>
      <Title fontSize="32px">These are your Favorite Exercises:</Title>
      <ExercisesGrid exercises={favoriteExercises} />
    </Flex>
  )
}

export default FavoriteExercises
