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
        'Monday': {'chest': 2, 'back': 2},
        'Tuesday': {'quadriceps': 2, 'hamstring': 1, 'calves': 1},
        'Thursday': {'shoulders': 2, 'biceps': 1, 'triceps': 1},
        'Friday': {'quadriceps': 1, 'hamstring': 2, 'calves': 1}
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
      'Monday': {'chest': 3, 'triceps': 1},
      'Tuesday': {'quadriceps': 2, 'hamstring': 1, 'calves': 1},
      'Wednesday': {'back': 3, 'biceps': 1},
      'Friday': {'chest': 2, 'back': 2},
      'Saturday': {'shoulders': 2, 'triceps': 1, 'biceps': 1},
      'Sunday': {'quadriceps': 1, 'hamstring': 2, 'calves': 1}
      }
    },
  }
  
  export default ExerciseData;  