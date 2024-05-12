import { Flex, Button } from '@radix-ui/themes'

const Hero = () => {

  const handleExploreClick = () => {
    const infoSection = document.getElementById('info')
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='p-font p-10 mb-[280px] mt-[120px] md:mb-[260px] m-10 md:mx-20 lg:mb-[240px] lg:mx-[400px] lg:mt-[80px]'>
        <div className='text-left m-auto'>
            <p className='text-4xl md:text-5xl lg:text-6xl lg:leading-[80px] font-semibold mb-[-2px] '>Evolve your workouts. Make progress. Reap the rewards.</p>
            <p className='text-xl md:text-2xl lg:text-3xl'>HTrain takes the guesswork out of your training. Build a routine that works for you.</p>
            <Flex justify="left">
              
              <Button 
                variant='solid' 
                className='px-12 py-6 rounded-md font-extrabold text-white mb-8 cursor-pointer'
                onClick={handleExploreClick}
                >Explore</Button>
          
            </Flex>
        </div>
    </div>
  )
}

export default Hero
