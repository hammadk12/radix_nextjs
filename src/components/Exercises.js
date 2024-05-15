import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Button, Card, Select, Flex, Grid } from '@radix-ui/themes'
import WeekSchedule from './WeekSchedule'
import ExerciseData from './ExerciseData'

const Exercises = () => {
  // States for experience selection
  const [experienceLevel, setExperienceLevel] = useState('');

  const handleExperienceLevelChange = (value) => {
    setExperienceLevel(value);
  };

  // State for training frequency
  const [trainingFrequency, setTrainingFrequency] = useState('')

  const handleTrainingFrequencyChange = (value) => {
    setTrainingFrequency(value);
  };

  // States for exercise search
  const [exercises, setExercises] = useState([])
  const [muscle, setMuscle] = useState('')
  const [searched, setSearched] = useState(false)

  // Api request for data
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
      setExercises(exerciseReponse.data)
      setSearched(true)

    } catch (error) {
      toast.error('Error fetching exercises. Please retry.');
      console.error('error:', error);
    }
  };

  return (
    <div className='text-center mx-10 md:mx-20 lg:mx-[200px]'>
      <h2 className='text-3xl md:text-4xl lg:text-6xl mt-[80px] mb-[50px] md:mb-[80px] lg:mb-[150px]'>Get Started: Create Your Custom Plan</h2>
      <Grid
        columns={{ md: '1fr', lg: '1fr 1fr' }} rows='auto auto auto auto' gapX={{lg: '8'}} gapY='9'
      >
        {/* 1st Card */}
        <Card size='5'>
          <div className='mb-14'>
            <p className='text-2xl'>1.</p>
            <h4 className='text-left text-2xl'>How Experienced Are You?</h4>
            <Flex>
              <Select.Root size="3" onValueChange={handleExperienceLevelChange} >
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
                <Select.Trigger color='violet' variant='solid' placeholder='Select Goal' className='mb-10 font-semibold' />
                <Select.Content color='violet' variant='soft' position='popper' highContrast className='bg-black'>
                  <Select.Item value='Weight'>Get Stronger 🏃</Select.Item>
                  <Select.Item value='Muscle'>Build Muscle 💪</Select.Item>
                  <Select.Item value='Improve'>Both! 📈</Select.Item>
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
              <Select.Root size="3" onValueChange={handleTrainingFrequencyChange}>
                <Select.Trigger color='violet' variant='solid' className=' font-semibold' placeholder='Select Frequency' />
                <Select.Content color='violet' variant='soft' position='popper' highContrast className='bg-black'>
                  <Select.Item value='1-2 Days/Week'>1-2 Days/Week</Select.Item>
                  <Select.Item value='2-4 Days/Week'>2-4 Days/Week</Select.Item>
                  <Select.Item value='4-6 Days/Week'>4-6 Days/Week</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
          </div>

          <div>
            <h4 className='text-left text-2xl'>What Are Your Preferences?</h4>
            <Flex>
              <Select.Root size="3">
                <Select.Trigger color='violet' variant='solid' placeholder='Select Preferences' className='mb-10 font-semibold' />
                <Select.Content color='violet' variant='soft' position='popper' highContrast className='bg-black'>
                  <Select.Item value='Outdoor'>Bodyweight Training 🏃</Select.Item>
                  <Select.Item value='Gym'>Weight Training 💪</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
          </div>

          {/* Hidden Card */}
          <div>
          {experienceLevel === 'Advanced' && (
            <>
            <h4 className='text-left text-2xl'>Specific Focus? (Optional)</h4>
            <Flex>
              <Select.Root size="3">
                <Select.Trigger color='violet' variant='solid' placeholder='Select Focus' className='mb-10 font-semibold' />
                <Select.Content color='violet' variant='soft' position='popper' highContrast className='bg-black'>
                  <Select.Item value='Upper'>Upper 🦾</Select.Item>
                  <Select.Item value='Lower'>Lower 🦿</Select.Item>
                  <Select.Item value='Full Body'>Both!</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
            </>
            )}
          </div>
          </Card>

          {/* Plan Card */}
            <Card size='5'>
              <h2>Your Plan:</h2>
              <WeekSchedule trainingFrequency={trainingFrequency} ExerciseData={ExerciseData}/>
            </Card>


        
      </Grid>

      <Card size='5'>
        <h2>Search For More Exercises Here!</h2>
        <label htmlFor="muscle" className=''></label>
        <input
          type="text"
          id="muscle"
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
          className='mr-2 py-1 px-1 mt-[2px]'
          placeholder='Enter Muscle Group'
        />
        <Button onClick={handleSearch} disabled={!muscle.trim()} className=''>Search</Button>
        <div>
        {searched && exercises.length === 0 && muscle && (
            <p>No exercises found.</p>
          )}
          {exercises.length > 0 && (
            <ul className='p-2'>
              {exercises.map((exercise, index) => (
                <li key={index}>{exercise.name}</li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </div>
  )
}

export default Exercises

/* 
ALL
Bodyweight Training:
-include full body bodyweight exercises
-pull ups, push ups, dips, squats
-vary intensity, volume, focus

ALL PLANS:
-include rest days + advice for rest
-include week plan/month plan
-adjust sets/reps based on goal (strength/hypertrophy)

1-2 Days/Week Weight Training:
-full body split
-vary based on experience/focus
-increase volume/exercises over time
*/

/* 
2-4 Days/Week Weight Training:
-upper/lower split
-vary based on experience/focus
-increase volume/exercises over time
*/

/* 
4-6 Days/Week Weight Training:
- Push/Pull or Arnold Split or Mix (give options)
-vary based on experience/focus
-increase volume/exercises over time
*/