import { Flex } from "@chakra-ui/react"
import StarIcon from "../components/StarIcon/StarIcon"

export const capitalizeText = (text) => {
  const parsedText = text.split("_").join(" ")
  const capitalizedFirstLetter = parsedText[0].toUpperCase()
  return `${capitalizedFirstLetter}${parsedText.slice(1)}`
}

export const getReviewsAverage = (reviews) => {
  if (!reviews.length) return ""
  let sum = 0
  for (const { rating } of reviews) {
    sum += rating // 4, 5, 5
  }
  const averageReview = Math.floor(sum / reviews.length)
  const iterations = [] // ["","",""]
  for (let i = 0; i < averageReview; i++) iterations.push("")
  // const iterations = new Array(averageReview).fill("")

  return (
    <Flex>
      {iterations.map(() => {
        return <StarIcon />
      })}
    </Flex>
  )
}

export const getExerciseDetails = (
  name,
  description,
  image,
  duration,
  audio
) => {
  return [
    { name: "Name", content: name },
    { name: "Description", content: description },
    { name: "Image", content: image },
    { name: "Duration", content: duration },
    { name: "Audio", content: audio },
  ]
}
