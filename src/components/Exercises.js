import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Button, Card } from '@radix-ui/themes'

const Exercises = () => {

  const [exercises, setExercises] = useState([])
  const [muscle, setMuscle] = useState('')

  const handleSearch = async () => {
    try {
      // Fetch the API key from the backend
    const apiKeyResponse = await axios.get('http://localhost:5000/api/api-key');
    const apiKey = apiKeyResponse.data.apiKey;

    // Use the fetched API key in the exercise search request
    const response = await axios.get('http://localhost:5000/api/exercises', {
      params: {
        muscle: muscle.toLowerCase()
      },
      headers: {
        'X-API-KEY': apiKey
      }
    });
    console.log(response.data);
    // setExercises(response.data.results);
  } catch (error) {
    toast.error('Error fetching exercises. Please retry.');
    console.error('error:', error);
  }
};

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
      </Card>
    </div>
  )
}

export default Exercises