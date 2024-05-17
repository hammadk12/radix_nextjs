const ExerciseData = {
  '1-2 Days/Week': {
    workoutDays: ['Monday', 'Wednesday'],
    restDays: ['Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    workoutSplits: {
      'Monday': 'Full Body',
      'Wednesday': 'Full Body'
      }
    },

  '2-4 Days/Week': {
    workoutDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    restDays: ['Wednesday', 'Saturday', 'Sunday'],
    workoutSplits: {
      'Monday': 'Upper Body',
      'Tuesday': 'Lower Body',
      'Thursday': 'Upper Body',
      'Friday': 'Lower Body'
      }
    },
    
    '4-6 Days/Week': {
    workoutDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],
    restDays: ['Thursday'],
    workoutSplits: {
      'Monday': 'Chest/Tri',
      'Tuesday': 'Legs',
      'Wednesday': 'Back/Bi',
      // Thursday Rest
      'Friday': 'Chest/Back',
      'Saturday': 'Shoulders/Arms',
      'Sunday': 'Legs'
      }
    },
  }
  
  export default ExerciseData;  