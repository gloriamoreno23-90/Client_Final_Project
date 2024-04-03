import { Grid } from "@chakra-ui/react"
import React from "react"
import ExerciseCard from "../ExerciseCard/ExerciseCard"
import CustomLink from "../CustomLink/CustomLink"

const ExercisesGrid = ({ exercises }) => {
  const handleLike = (e) => {
    e.preventDefault()
  }

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gap={"40px"}
    >
      {exercises.map(({ name, _id, image }) => {
        return (
          <CustomLink key={_id} to={`/exercises/${_id}`}>
            <ExerciseCard
              key={_id}
              name={name}
              image={image}
              handleLike={handleLike}
            />
          </CustomLink>
        )
      })}
    </Grid>
  )
}

export default ExercisesGrid
