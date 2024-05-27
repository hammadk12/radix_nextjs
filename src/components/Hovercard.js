import React from 'react'
import { Text, Flex, Link, Box, HoverCard, Strong } from '@radix-ui/themes'

const Hovercard = ({ exercise }) => {
  return (
    <Text>
      {' '}
        <HoverCard.Root>
            <HoverCard.Trigger>
             <Link size='5' href={exercise.Video} target='_blank'>{exercise.WorkOut}</Link>
            </HoverCard.Trigger>
            <HoverCard.Content className='w-[350px] p-6 mr-14'>
            <Flex gap='4'>
              <Box className='text-black'>
                <ul>
                <li><Text><Strong>Click on {exercise.WorkOut} for a video tutorial!</Strong></Text></li>
                <li><Text><Strong>Equipment:</Strong> {exercise.Equipment}</Text></li>
                <li><Text><Strong>Intensity Level:</Strong> {exercise.Intensity_Level}</Text></li>
                <li><Text><Strong>Explanation:</Strong> {exercise.Explaination}</Text></li>
                <li><Text><Strong>Beginner Sets:</Strong> {exercise["Beginner Sets"]}</Text></li>
                <li><Text><Strong>Intermediate Sets:</Strong> {exercise["Intermediate Sets"]}</Text></li>
                <li><Text><Strong>Expert Sets:</Strong> {exercise["Expert Sets"]}</Text></li>
                <li><Text><Strong>Long Explanation:</Strong> {exercise["Long Explanation"]}</Text></li>
                </ul>
                </Box>
            </Flex>
            </HoverCard.Content>
        </HoverCard.Root>{' '}
    </Text>
  )
}

export default Hovercard