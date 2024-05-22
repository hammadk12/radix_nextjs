import React from 'react'
import { Text, Flex, Link, Box, HoverCard } from '@radix-ui/themes'

const Hovercard = ({ exercise }) => {
  // console.log(exercise.WorkOut)
  return (
    <Text>
      {' '}
        <HoverCard.Root>
            <HoverCard.Trigger>
             <Link href={exercise.Video} target='_blank'>{exercise.WorkOut}</Link>
            </HoverCard.Trigger>
            <HoverCard.Content maxWidth='600px'>
            <Flex gap='4'>
              <Box className='text-black'>
                <Text>Equipment: {exercise.Equipment}</Text>
                <Text>Intensity Level: {exercise.Intensity_Level}</Text>
                <Text>Explanation: {exercise.Explanation}</Text>
                <Text>Beginner Sets: {exercise.Beginner_Sets}</Text>
                <Text>Intermediate Sets: {exercise.Intermediate_Sets}</Text>
                <Text>Expert Sets: {exercise.Expert_Sets}</Text>
                <Text>Long Explanation: {exercise.Long_Explanation}</Text>
                </Box>
            </Flex>
            </HoverCard.Content>
        </HoverCard.Root>{' '}
    </Text>
  )
}

export default Hovercard