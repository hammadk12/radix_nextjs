import React from 'react';
import { Tabs } from '@radix-ui/themes';

const WeekSchedule = ({ trainingFrequency, ExerciseData }) => {

    const renderWorkoutPlan = () => {
        const selectedDayCount = {
            '1-2 Days/Week': 2,
            '2-4 Days/Week': 4,
            '4-6 Days/Week': 6,
        }

        const workoutDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        return workoutDays.map((day, index) => {
            return (
            <div key={index}>
                <h3>{day}</h3>
                <ul>
                {index < selectedDayCount[trainingFrequency] ? ExerciseData.find(data => data.day === day).exercises.map((exercise, i) => (
                    <li key={i}>{exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}</li>
                )) : <li>Rest Day</li>}
                </ul>
            </div>
            )
        })
    }

    return (
        <Tabs.Root defaultValue='Monday' >
            <Tabs.List>
                <Tabs.Trigger value='Monday'>Monday</Tabs.Trigger>
                <Tabs.Trigger value='Tuesday'>Tuesday</Tabs.Trigger>
                <Tabs.Trigger value='Wednesday'>Wednesday</Tabs.Trigger>
                <Tabs.Trigger value='Thursday'>Thursday</Tabs.Trigger>
                <Tabs.Trigger value='Friday'>Friday</Tabs.Trigger>
                <Tabs.Trigger value='Saturday'>Saturday</Tabs.Trigger>
                <Tabs.Trigger value='Sunday'>Sunday</Tabs.Trigger>
            </Tabs.List>

            <div>
                <Tabs.Content value='Monday'>
                    {renderWorkoutPlan()}
                </Tabs.Content>

                <Tabs.Content value='Tuesday'>
                    {renderWorkoutPlan()}
                </Tabs.Content>

                <Tabs.Content value='Wednesday'>
                    {renderWorkoutPlan()}
                </Tabs.Content>

                <Tabs.Content value='Thursday'>
                    {renderWorkoutPlan()}
                </Tabs.Content>

                <Tabs.Content value='Friday'>
                    {renderWorkoutPlan()}
                </Tabs.Content>

                <Tabs.Content value='Saturday'>
                    {renderWorkoutPlan()}
                </Tabs.Content>

                <Tabs.Content value='Sunday'>
                    {renderWorkoutPlan()}
                </Tabs.Content>
            </div>
        </Tabs.Root>
    );
};

export default WeekSchedule;
