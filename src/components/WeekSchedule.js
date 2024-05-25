import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Button, Tabs } from '@radix-ui/themes';
import ExerciseData from './ExerciseData';
import Hovercard from './Hovercard';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

const WeekSchedule = ({ trainingFrequency }) => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [currentDay, setCurrentDay] = useState(0)
    const dayRefs = daysOfWeek.map(() => useRef(null))

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
        dayRefs[currentDay].current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }, [currentDay])


    const [exerciseData, setExerciseData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/api-key2`)
            const apiKey2 = response.data.apiKey2

            const { muscles, workoutDays } = ExerciseData[trainingFrequency]
            const exercisesPromises = []

            workoutDays.forEach((day) => {
                muscles[day].forEach((muscle) => {
                    const exercisePromise = axios.get(`http://localhost:5000/api/exercises-rapidapi?muscle=${muscle}`, {
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
            });

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

            console.log("transformed data:", transformedData)
            setExerciseData(transformedData)
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error.response ? error.response.data : error.message);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [trainingFrequency])


    const renderWorkoutPlan = (day) => {
        console.log('Training Frequency:', trainingFrequency);

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
                    <p>Loading...</p>
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
