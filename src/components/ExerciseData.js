const ExerciseData = {
  '1-2 Days/Week': {
    workoutDays: ['Monday', 'Wednesday'],
    restDays: ['Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    workoutSplits: {
      'Monday': 'Full Body',
      'Wednesday': 'Full Body'
      },
      muscles: {
        'Monday': ['shoulders', 'legs', 'chest', 'back'],
        'Wednesday': ['shoulders', 'legs', 'chest', 'back']
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
      },
      muscles: {
        'Monday': ['chest', 'back'],
        'Tuesday': ['quadriceps', 'hamstring', 'calves'],
        'Thursday': ['shoulders', 'biceps', 'triceps'],
        'Friday': ['quadriceps', 'hamstring', 'calves']
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
      },
      muscles: {
      'Monday': ['chest', 'triceps'],
      'Tuesday': ['quadriceps', 'hamstring', 'calves'],
      'Wednesday': ['back', 'biceps'],
      'Friday': ['chest', 'back'],
      'Saturday': ['shoulders', 'triceps', 'biceps'],
      'Sunday': ['quadriceps', 'hamstring', 'calves']
      }
    },
  }
  
  export default ExerciseData;  