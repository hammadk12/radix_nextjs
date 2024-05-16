import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs } from '@radix-ui/themes';

const WeekSchedule = ({ trainingFrequency }) => {
    const [exerciseData, setExerciseData] = useState([])
    const [loading, setLoading] = useState(true)
    
    const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/api-key2`)
                const apiKey2 = response.data.apiKey2

                const muscle = 'biceps'
                const workoutResponse = await axios.get(`http://localhost:5000/api/exercises-rapidapi?muscle=${muscle}`, {
                    headers: {
                      'X-API-KEY': apiKey2,
                      'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com' 
                    },
                  })
                console.log("Workout Response:", workoutResponse.data)
                setExerciseData(workoutResponse.data)
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
        console.log('Exercise Data:', exerciseData);
        const selectedData = exerciseData[trainingFrequency]

        if (!selectedData) {
            return <p>No workout data found</p>
        }

        const selectedDayData = selectedData[trainingFrequency].workoutDays.includes(day);

        if (!selectedDayData || selectedDayData.isRestDay) {
            return <div>
                    <h3>{day}</h3> 
                    <p>Rest Day! Recover, eat, prepare for the next session.</p>
                </div>
        }

        const exercises = selectedDayData.exercises || []

        if (!exercises) {
            return <p>No exercises</p>
        }

        return (
            <div>
                <h3>{day}</h3>
                <ul>
                    {selectedDayData.exercises && selectedDayData.exercises.map((exercise, i) => (
                        <li key={i}>
                            {exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}
                        </li>
                    ))}
                </ul>
            </div>
        );
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
};

export default WeekSchedule;
