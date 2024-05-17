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

                const muscle = 'biceps'
                const workoutResponse = await axios.get(`http://localhost:5000/api/exercises-rapidapi?muscle=${muscle}`, {
                    headers: {
                      'X-API-KEY': apiKey2,
                      'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com' 
                    },
                  })
                const transformedData = Object.keys(workoutResponse.data).map(key => ({ [key]: workoutResponse.data[key] }));
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
        console.log('Exercise Data:', exerciseData);

        const { workoutDays, restDays, workoutSplits } = ExerciseData[trainingFrequency]

        if (restDays.includes(day)) {
            return (
                <div>
                    <h3>{day}</h3>
                    <p>Rest Day! Recover, eat, prepare for the next session.</p>
                </div>
            );
        }

        // Check if exerciseData[1] is defined and has the data property
        if (workoutDays.includes(day)) {
            if (!exerciseData || !exerciseData[1] || !exerciseData[1].data || exerciseData[1].data.length === 0) {
            console.log("No exercise data available.");
            return <p>No workout data found</p>;
        }

        const firstExerciseArray = exerciseData[1].data;

         // Check if firstExerciseArray is defined and has at least one exercise
        if (!firstExerciseArray || firstExerciseArray.length === 0) {
        console.log("No exercise data available.");
        return <p>No workout data found</p>;
        }

        const firstExercise = firstExerciseArray[0];

        // console.log("First exercise:", firstExercise.WorkOut);
        
        return (
            <div>
                <h3>{day}</h3>
                <p>{workoutSplits[day]}</p>
                <ul>
                    <li>
                        {firstExercise.WorkOut} - Sets: 3, Reps: 12
                    </li>
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
