import React from 'react';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Flex } from '@chakra-ui/layout';
import FeaturedExercises from '../../components/FeaturedExercises/FeaturedExercises';

function HomePage() {
  return (
    <PageWrapper>
      <Flex>
        <FeaturedExercises />
      </Flex>
    </PageWrapper>
  );
}

export default HomePage;
