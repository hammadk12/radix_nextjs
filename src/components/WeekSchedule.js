import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { Button, Tabs } from '@radix-ui/themes';
import ExerciseData from './ExerciseData';
import Hovercard from './Hovercard';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

const WeekSchedule = ({ trainingFrequency }) => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [currentDay, setCurrentDay] = useState(0)
    const dayRefs = useRef(daysOfWeek.map(() => null))

    const scrollLeft = () => {
        if (currentDay > 0) {
            setCurrentDay(currentDay - 1);
        } else {
            setCurrentDay(daysOfWeek.length - 1);
        }
    }

    const scrollRight = () => {
        if (currentDay < daysOfWeek.length - 1) {
            setCurrentDay(currentDay + 1);
        } else {
            setCurrentDay(0);
        }
    }

    useEffect(() => {
        if (dayRefs[currentDay]) {
            dayRefs.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        }
    }, [currentDay, dayRefs])


    const [exerciseData, setExerciseData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {

        const apiKey2Endpoint = process.env.NEXT_PUBLIC_API_KEY_ENDPOINT
        const dataEndpoint = process.env.NEXT_PUBLIC_DATA_ENDPOINT
    
        try {
            const response = await axios.get(apiKey2Endpoint)
            const apiKey2 = response.data.apiKey2

            const { muscles, workoutDays } = ExerciseData[trainingFrequency]
            const exercisesPromises = []

            workoutDays.forEach((day) => {
                const musclesForDay = muscles[day]
                if (Array.isArray(musclesForDay)) {
                    muscles[day].forEach((muscle) => {
                    const exercisePromise = axios.get(`${dataEndpoint}?muscle=${muscle}`, {
                        headers: {
                            'X-API-KEY': apiKey2,
                            'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com',
                        },
                    }).then((response) => ({
                        day,
                        muscle,
                        exercise: response.data[0] || null,
                    }))
                    exercisesPromises.push(exercisePromise)
                })
            } else {
                Object.keys(musclesForDay).forEach((muscle) => {  
                    const numExercises = musclesForDay[muscle]
                    for (let i = 0; i < numExercises; i++) {
                    const exercisePromise = axios.get(`${dataEndpoint}?muscle=${muscle}`, {
                        headers: {
                            'X-API-KEY': apiKey2,
                            'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com',
                        },
                    }).then((response) => {
                        if (Array.isArray(response.data) && response.data.length > i) {
                            return {
                                day,
                                muscle,
                                exercise: response.data[i] || null,
                            }
                        } else {
                            return {
                                day,
                                muscle,
                                exercise: null,
                            }
                        }
                    });
                    exercisesPromises.push(exercisePromise);
                }
               })
            }
        })

            // Wait for all exercise promises to resolve
            const exerciseResponses = await Promise.all(exercisesPromises);

            // Group exercises by day
            const transformedData = workoutDays.map((day) => {
                const exercises = exerciseResponses.filter((response) => response.day === day)

                // Remove duplicates based on the exercise
                const uniqueExercises = []
                const seenWorkOuts = new Set()

                exercises.forEach(({ muscle, exercise }) => {
                    if (exercise && !seenWorkOuts.has(exercise.WorkOut)) {
                        uniqueExercises.push({ muscle, exercise })
                        seenWorkOuts.add(exercise.WorkOut)
                    }
                })

                return {
                    day,
                    exercises: uniqueExercises,
                }
            })

            setExerciseData(transformedData)
            setLoading(false)
        } catch (error) {
            if (error.response && error.response.status === 429) {
                console.log('API limit reached')
                setError('API limit reached. Please try again later.')
            } else {
                console.error('Error fetching data:', error.response ? error.response.data : error.message);
                setError('An error occurred while fetching data. Please try again later.')
            }
            setLoading(false)
        }
    }, [trainingFrequency])

    useEffect(() => {
        fetchData();
    }, [fetchData])


    const renderWorkoutPlan = (day) => {
       // console.log('Training Frequency:', trainingFrequency);

        const { workoutDays, restDays, workoutSplits } = ExerciseData[trainingFrequency]

        if (restDays.includes(day)) {
            return (
                <div>
                    <h3>{day}</h3>
                    <p>Rest Day! Recover, eat, prepare for the next session.</p>
                </div>
            );
        }

        if (workoutDays.includes(day)) {
            const exercisesForDay = exerciseData.find((data) => data.day === day)

            if (!exercisesForDay || !exercisesForDay.exercises.length) {
                console.log(`No exercise data found for ${day}`)
                return <p>No workout data found</p>
            }

            console.log(`Exercise for ${day}:`, exercisesForDay)

            return (
                <div>
                    <h3>{workoutSplits[day]}</h3>
                    <ul className='flex flex-col md:flex-row gap-y-4 justify-between ml-[-40px] lg:mx-[200px]'>
                        {exercisesForDay.exercises.map(({ muscle, exercise }, index) => (
                                <li key={index}>
                                    <Hovercard exercise={exercise} />
                                </li>
                        ))}
                    </ul>
                </div>
            );
        }

        return null
    }

    return (
        <Tabs.Root value={daysOfWeek[currentDay]}>
            <div className='flex items-center'>
            <Button className='bg-transparent cursor-pointer' onClick={scrollLeft}>
                <ChevronLeftIcon />
            </Button>
            <Tabs.List className='flex overflow-x-auto whitespace-nowrap snap-x snap-mandatory'>
                {daysOfWeek.map((day, index) => (
                    <Tabs.Trigger key={day} value={day} ref={dayRefs[index]} className='snap-start'>{day}</Tabs.Trigger>
                ))}
            </Tabs.List>
            <Button className='bg-transparent cursor-pointer' onClick={scrollRight}>
                <ChevronRightIcon />
            </Button>
            </div>
            <div>
                {loading ? (
                    <p className='text-2xl text-center mt-10'>Loading...</p>
                ) : (
                    daysOfWeek.map((day) => (
                        <Tabs.Content key={day} value={day}>
                            {renderWorkoutPlan(day)}
                        </Tabs.Content>
                    ))
                )}
            </div>
        </Tabs.Root>
    );
}

export default WeekSchedule;
