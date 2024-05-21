import React from 'react'
import { HoverCard, Text, Flex } from '@radix-ui/themes'

const Hovercard = ({ exercise }) => {
  return (
    <Text>
        <HoverCard.Root>
            <HoverCard.Trigger>
             Hover me
            </HoverCard.Trigger>
            <HoverCard.Content maxWidth='600px'>
            <Flex gap='4'>
                <h4>{exercise.Workout}</h4>
                <p>Equipment: {exercise.Equipment}</p>
                <p>Intensity Level: {exercise.Intensity_Level}</p>
                <p>Explanation: {exercise.Explanation}</p>
                <p>Beginner Sets: {exercise.Beginner_Sets}</p>
                <p>Intermediate Sets: {exercise.Intermediate_Sets}</p>
                <p>Expert Sets: {exercise.Expert_Sets}</p>
                <p>Long Explanation: {exercise.Long_Explanation}</p>
                <a href={exercise.video}></a>
            </Flex>
            </HoverCard.Content>
        </HoverCard.Root>
    </Text>
  )
}

export default Hovercard