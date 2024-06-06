import React, { useState, useEffect } from 'react'
import { Text, Flex, Link, Box, HoverCard, Strong } from '@radix-ui/themes'

const Hovercard = ({ exercise }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const handleResize = () => setIsMobile(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleResize)
    return () => mediaQuery.removeEventListener('channge', handleResize)
  }, [])

  const handleCardClick = () => {
    if (isMobile) setIsVisible(!isVisible)
  }

  return (
    <Text onClick={handleCardClick}>
      {' '}
        <HoverCard.Root open={isMobile ? isVisible : undefined}>
            <HoverCard.Trigger>
              <Text className='text-[#baa7ff] cursor-pointer'>{exercise.WorkOut}</Text>
            </HoverCard.Trigger>
            <HoverCard.Content className='w-[350px] p-6 mr-14'>
            <Flex gap='4'>
              <Box className='text-black'>
                <ul>
                <li><Text><Strong>Equipment:</Strong> {exercise.Equipment}</Text></li>
                <li><Text><Strong>Intensity Level:</Strong> {exercise.Intensity_Level}</Text></li>
                <li><Text><Strong>Explanation:</Strong> {exercise.Explaination}</Text></li>
                <li><Text><Strong>Beginner Sets:</Strong> {exercise["Beginner Sets"]}</Text></li>
                <li><Text><Strong>Intermediate Sets:</Strong> {exercise["Intermediate Sets"]}</Text></li>
                <li><Text><Strong>Expert Sets:</Strong> {exercise["Expert Sets"]}</Text></li>
                <li><Text><Strong>Long Explanation:</Strong> {exercise["Long Explanation"]}</Text></li>
                <li><Text><Strong>Video: </Strong><Link size='4' className='underline text-[#8668ffcc]' href={exercise.Video} target='_blank'>{exercise.WorkOut}</Link></Text></li>
                </ul>
                </Box>
            </Flex>
            </HoverCard.Content>
        </HoverCard.Root>{' '}
    </Text>
  )
}

export default Hovercard