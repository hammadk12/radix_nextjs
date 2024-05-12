import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Button, Card, Select, Flex, Grid } from '@radix-ui/themes'

const Exercises = () => {

  // Api request for data
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
    <div className='text-center mx-10 md:mx-20 lg:mx-[200px]'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl mt-[80px] mb-[150px]'>Get Started: Create Your Custom Plan</h2>
      <Grid
      columns={{md: '1fr', lg: '1fr 1fr'}} rows='auto auto auto auto'
      >
      {/* 1st Card */}
      <Card size='5'>
        <div className='mb-14'>
        <p className='text-2xl'>1.</p>
        <h4 className='text-left text-2xl'>How Experienced Are You?</h4>
        <Flex>
          <Select.Root size="3" >
            <Select.Trigger color='violet' variant='solid' className='px-2 font-semibold' placeholder='Select Experience Level' />
            <Select.Content color='violet' variant='soft' position='popper' highContrast className='bg-black'>
                <Select.Item value='Beginner'>Beginner: I don't know much/anything 🤷‍♂️</Select.Item>
                <Select.Item value='Intermediate'>Intermediate: I know a little bit 🏋️</Select.Item>
                <Select.Item value='Advanced'>Advanced: I know how to workout 🦾</Select.Item>
            </Select.Content>
          </Select.Root> 
         </Flex>
        </div>
         <div>
          <h4 className='text-left text-2xl'>What's Your Goal?</h4>
         <Flex>
         <Select.Root size="3">
            <Select.Trigger color='violet' variant='solid' placeholder='Select Goal' className='font-semibold'/>
            <Select.Content color='violet' variant='soft' position='popper' highContrast className='bg-black'>
                <Select.Item value='Weight'>Get Stronger 🏃</Select.Item>
                <Select.Item value='Muscle'>Build Muscle 💪</Select.Item>
                <Select.Item value='Improve'>Improve Workouts 📈</Select.Item>
            </Select.Content>
          </Select.Root> 
          </Flex>
        </div>
      </Card>

      {/* 2nd Card */}
      <Card size='5'>
      <div className='mb-14'>
        <p className='text-2xl'>2.</p>
        <h4 className='text-left text-2xl'>How Often Would You Train?</h4>
        <Flex>
          <Select.Root size="3" >
            <Select.Trigger color='violet' variant='solid' className='px-2 font-semibold' placeholder='Select Frequency' />
            <Select.Content color='violet' variant='soft' position='popper' highContrast className='bg-black'>
                <Select.Item value='Beginner'>1-2 Days/Week</Select.Item>
                <Select.Item value='Intermediate'>2-4 Days/Week</Select.Item>
                <Select.Item value='Advanced'>4-6 Days/Week</Select.Item>
            </Select.Content>
          </Select.Root> 
         </Flex>
        </div>
         <div>
          <h4 className='text-left text-2xl'>What Are Your Preferences?</h4>
         <Flex>
         <Select.Root size="3">
            <Select.Trigger color='violet' variant='solid' placeholder='Select Goal' className='font-semibold'/>
            <Select.Content color='violet' variant='soft' position='popper' highContrast className='bg-black'>
                <Select.Item value='Weight'>Outdoor Training 🏃</Select.Item>
                <Select.Item value='Muscle'>Gym Training 💪</Select.Item>
                <Select.Item value='Improve'>Both!</Select.Item>
            </Select.Content>
          </Select.Root> 
          </Flex>
        </div>
      </Card>
      </Grid>


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