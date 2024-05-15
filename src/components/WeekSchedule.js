import React from 'react';
import { Tabs } from '@radix-ui/themes';
import ExerciseData from './ExerciseData';

const WeekSchedule = ({ trainingFrequency }) => {

    const renderWorkoutPlan = (day) => {
        console.log('Training Frequency:', trainingFrequency);
        console.log('Exercise Data:', ExerciseData);
        const selectedDayData = ExerciseData[trainingFrequency].find(data => data.day === day)

        if (!selectedDayData || selectedDayData.isRestDay) {
            return <div><h3>{day}</h3> <p>Rest Day 😄</p></div>
        }

        const exercises = selectedDayData.exercises || []

        if (!exercises) {
            return <p>No exercises</p>
        }

        return (
            <div>
                <h3>{day}</h3>
                <ul>
                    {selectedDayData.exercises.map((exercise, i) => (
                        <li key={i}>{exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}</li>
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
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <Tabs.Content key={day} value={day}>
                        {renderWorkoutPlan(day)}
                    </Tabs.Content>
                ))}
            </div>
        </Tabs.Root>
    );
};

export default WeekSchedule;
