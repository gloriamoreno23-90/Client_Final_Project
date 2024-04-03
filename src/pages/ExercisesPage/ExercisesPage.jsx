import React from 'react'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import { Flex } from '@chakra-ui/layout'
import Title from '../../components/Title/Title'
import ExercisesGrid from '../../components/ExercisesGrid/ExercisesGrid'
import { useLoaderData } from 'react-router-dom'

function ExercisesPage() {

  const exercises = useLoaderData();

  return (
    <PageWrapper>
      <Flex flexDir={"column"} gap={"80px"}>
        <Title>Available Exercises:</Title>
        <ExercisesGrid exercies={exercises} />
      </Flex>
    </PageWrapper>
  )
}

export default ExercisesPage