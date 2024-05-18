import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs } from '@radix-ui/themes';
import ExerciseData from './ExerciseData';

const WeekSchedule = ({ trainingFrequency }) => {
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
                    <h3>{day}</h3>
                    <p>{workoutSplits[day]}</p>
                    <ul>
                        {exercisesForDay.exercises.map(({ muscle, exercise }, index) => (
                            <li key={index}>
                                {exercise.WorkOut} - Sets: 3, Reps: 12
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        return null
    }

    return (
        <Tabs.Root defaultValue='Monday' >
            <Tabs.List>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <Tabs.Trigger key={day} value={day}>{day}</Tabs.Trigger>
                ))}
            </Tabs.List>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
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
