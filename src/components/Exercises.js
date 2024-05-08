import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Card } from '@radix-ui/themes'

const Exercises = () => {

  const [exercises, setExercises] = useState([])
  const [muscle, setMuscle] = useState('')
  const apikey = process.env.API_KEY;

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': apikey
        }
      })
      if (!response.ok) {
        throw new Error('Failed to fetch exercises');
      }
      const data = await response.json();
      setExercises(data.results);
    } catch (error) {
      toast.error('Error fetching exercises. Please retry.')
      console.error('error:', error)
    }
  }

  return (
    <div className='text-center mx-[100px]'>
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
      <ul>
        {exercises && exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
      </Card>
    </div>
  )
}

export default Exercises