import { Flex, Button, Link } from '@radix-ui/themes'

const Hero = () => {

  const handleExploreClick = () => {
    const infoSection = document.getElementById('info')
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='p-10 mb-[300px] mt-[180px] md:mb-[260px] m-10 md:mx-20 lg:mb-[240px] lg:mx-[400px] lg:mt-[80px]'>
        <div className='text-left m-auto'>
            <p className='text-4xl md:text-5xl lg:text-6xl lg:leading-[80px] font-semibold mb-6'><span className='text-white'>Evolve</span> your workouts. Make progress. <span className='text-white'>Reap</span> the rewards.</p>
            <p className='text-xl md:text-2xl lg:text-3xl hidden md:block md:mb-4'>HTrain takes the guesswork out of your training. Build a routine that works for you.</p>
            <Flex justify="left">
              <Link href='/start'>
              <Button variant='solid' className='mr-6 px-6 py-6 rounded-md font-extrabold text-white cursor-pointer'>Get Started</Button>
              </Link>
              <Button 
                variant='solid' 
                className='px-6 py-6 rounded-md font-extrabold text-white cursor-pointer'
                onClick={handleExploreClick}
                >Explore
              </Button>
              
            </Flex>
        </div>
    </div>
  )
}

export default Hero
