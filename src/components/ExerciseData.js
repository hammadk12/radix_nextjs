const ExerciseData = {
  '1-2 Days/Week': [
    {
      day: 'Monday',
      exercises: [
        { name: 'Exercise 1', sets: 3, reps: 10 },
        { name: 'Exercise 2', sets: 3, reps: 10 },
      ],
    },
    {
      day: 'Tuesday',
      exercises: [
        { name: 'Exercise 3', sets: 2, reps: 8 },
        { name: 'Exercise 4', sets: 1, reps: 12 },
      ],
    },
    // rest days for 1-2 Days/Week
    { day: 'Wednesday', isRestDay: true },
    { day: 'Thursday', isRestDay: true },
    { day: 'Friday', isRestDay: true },
    { day: 'Saturday', isRestDay: true },
    { day: 'Sunday', isRestDay: true },
  ],

  '2-4 Days/Week': [
    {
      day: 'Monday',
      exercises: [
        { name: 'Exercise 1', sets: 3, reps: 10 },
        { name: 'Exercise 2', sets: 3, reps: 10 },
      ],
    },
    {
      day: 'Tuesday',
      exercises: [
        { name: 'Exercise 3', sets: 2, reps: 8 },
        { name: 'Exercise 4', sets: 1, reps: 12 },
      ],
    },
    {
      day: 'Wednesday',
      exercises: [
        { name: 'Exercise 4', sets: 3, reps: 10 },
        { name: 'Exercise 5', sets: 3, reps: 10 },
      ],
    },
    {
      day: 'Thursday',
      exercises: [
        { name: 'Exercise 5', sets: 2, reps: 8 },
        { name: 'Exercise 6', sets: 1, reps: 12 },
      ],
    },
    // rest days for 2-4 Days/Week
    { day: 'Friday', isRestDay: true },
    { day: 'Saturday', isRestDay: true },
    { day: 'Sunday', isRestDay: true },
  ],

  '4-6 Days/Week': [
    {
      day: 'Monday',
      exercises: [
        { name: 'Exercise 1', sets: 3, reps: 10 },
        { name: 'Exercise 2', sets: 3, reps: 10 },
      ],
    },
    {
      day: 'Tuesday',
      exercises: [
        { name: 'Exercise 3', sets: 2, reps: 8 },
        { name: 'Exercise 4', sets: 1, reps: 12 },
      ],
    },
    {
      day: 'Wednesday',
      exercises: [
        { name: 'Exercise 4', sets: 3, reps: 10 },
        { name: 'Exercise 5', sets: 3, reps: 10 },
      ],
    },
    {
      day: 'Friday',
      exercises: [
        { name: 'Exercise 5', sets: 2, reps: 8 },
        { name: 'Exercise 6', sets: 1, reps: 12 },
      ],
    },
    {
      day: 'Saturday',
      exercises: [
        { name: 'Exercise 4', sets: 3, reps: 10 },
        { name: 'Exercise 5', sets: 3, reps: 10 },
      ],
    },
    // rest days for 4-6 Days/Week
    { day: 'Thursday', isRestDay: true },
    { day: 'Sunday', isRestDay: true },
  ],
};
  
  export default ExerciseData;