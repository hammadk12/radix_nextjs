import { Card, Link } from '@radix-ui/themes'
import React from 'react'

const about = () => {
  return (
    <div className='mx-10 md:mx-20 lg:mx-[200px]'>
        <h2 className='text-center mt-16 md:mt-18 text-3xl mb-8 '>About HTrain</h2>
        <p className='text-center mb-10 lg:mb-14 md:text-lg mx-2 md:mx-20'>HTrain's mission is to make fitness accessible to everyone, regardless of their experience level or fitness goals.</p>
        <div className='mb-[200px] flex gap-x-[40px]'>
        <Card size='5' className='lg:w-1/2 text-white'>
          <h3 className='text-2xl text-[#8668ffcc]'>Our Story</h3>
          <p className='text-lg mb-[100px] '>HTrain is a fitness platform that helps you reach your fitness goals. We provide a personalized workout plan based on your fitness level, goals, and preferences. Our mission is to make fitness accessible to everyone, regardless of their experience level or fitness goals. Whether you're a beginner looking to get in shape or an experienced athlete looking to take your training to the next level, HTrain has a plan for you.</p>

          <h3 className='text-2xl text-[#8668ffcc]'>How It Works</h3>
          <p className='text-lg mb-[100px]'>Getting started with HTrain is easy. Simply select your experience level, choose your fitness goals, and tell us what you like. We'll use this information to create a personalized workout plan just for you. Our plans are designed by fitness experts and tailored to your individual needs, so you can be confident that you're getting the best possible workout for your goals.</p>

          <h3 className='text-2xl text-[#8668ffcc]'>Get Started Today</h3>
          <p className='text-lg mb-10'>Ready to start your fitness journey with HTrain? Sign up today to get access to your personalized workout plan. With HTrain, you can track your progress, reach your goals, and achieve what you always wanted. Get started today and see the difference that HTrain can make in your fitness journey.</p>
        </Card>

        <Card size='5' className='hidden lg:block lg:w-1/2 float-right text-white'>
            <h3 className='text-2xl text-[#8668ffcc]'>Our Team</h3>
            <p className='text-lg mb-[100px]'>Our team is made up of fitness experts, trainers, and athletes who are passionate about helping people reach their fitness goals. We're dedicated to providing you with the best possible workout experience, so you can be confident that you're getting the best possible workout for your goals.</p>

            <h3 className='text-2xl text-[#8668ffcc]'>Resources/Tools</h3>
            <p className='text-lg mb-[100px]'>To create HTrain, we utilized many different technologies and resources. To obtain exercise information we used two API's from rapidapi.com, alongside a backend server made with Express, Node, and JavaScript to handle the data. Our UI & frontend was made using NextJS, JavaScript, Tailwind CSS, & Radix UI.</p>

            <h3 className='text-2xl text-[#8668ffcc]'>Contact Us!</h3>
            <p className='text-lg mb-10'>Have a question or need help with your workout plan? <Link href='/contact'>Contact</Link> us today and we'll be happy to assist you. We're here to help you reach your fitness goals and achieve what you always wanted. Get in touch with us today and see the difference that HTrain can make in your fitness journey.</p>
        </Card>
        </div>
    </div>
  )
}

export default about