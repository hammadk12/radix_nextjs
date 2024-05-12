import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Button, Card } from '@radix-ui/themes'

const Exercises = () => {

  const [exercises, setExercises] = useState([])
  const [muscle, setMuscle] = useState('')

  const handleSearch = async () => {
    try {
    
    const response = await axios.get(`http://localhost:5000/api/api-key`)
    const apiKey = response.data.apiKey

    const exerciseReponse = await axios.get(`http://localhost:5000/api/exercises?muscle=${muscle.toLowerCase()}`, {
      headers: {
        'X-API-KEY': apiKey
      }
    })
    console.log('Exercise Response:', exerciseReponse.data);
    setExercises(exerciseReponse.data);

  } catch (error) {
    toast.error('Error fetching exercises. Please retry.');
    console.error('error:', error);
  }
};

  return (
    <div className='text-center mx-[100px]'>
      <h2 className='text-4xl mt-[50px]'>Get Started: Create Your Custom Plan</h2>
      <Card size='5'>
      <h2>Exercises</h2>
      <label htmlFor="muscle" className='mr-2'>Muscle Group:</label>
      <input
        type="text"
        id="muscle"
        value={muscle}
        onChange={(e) => setMuscle(e.target.value)}
      />
      <Button onClick={handleSearch} className=''>Search</Button>
      <div>
          {exercises.length > 0 && (
            <ul>
              {exercises.map((exercise, index) => (
                <li key={index}>{exercise.name}</li>
              ))}
            </ul>
          )} 
          {exercises.length === 0 && muscle && (
            <p>No exercises found.</p>
          )}
        </div>
      </Card>
    </div>
  )
}

export default Exercises