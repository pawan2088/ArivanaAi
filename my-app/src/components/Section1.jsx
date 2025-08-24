import React from 'react'
import { motion } from 'framer-motion'

const Section1 = () => {
    return (

        <div className='flex flex-col  py-10 px-5 items-center'>
             
            <div className='border-2 border-base-300 mt-20  rounded-full flex p-2'>
                <img src="/asset 9.png" alt="" className='w-8' />
                <motion.span
                    id='whychooseus'
                    className='text-lg font-bold border-1 border-base-300  rounded-full p-1'
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    
                        Why choose Us
                    
                </motion.span>
            </div>
            <motion.h1
                className='sm:text-5xl text-3xl font-semibold text-center pt-8'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                Effortless Interview Preparation &
            </motion.h1>
            <p className='text-center sm:text-5xl text-3xl font-semibold '> Builds Confidence</p>
            <div className='flex w-full gap-10 pt-10 sm:flex-nowrap flex-wrap justify-center'>
                <div className=' rounded-xl h-150 w-full sm:w-1/3  p-6  shadow-xl shadow-gray-300'>
                    <div className='h-1/3 w-full bg-amber-950  rounded-lg'></div>
                    <div>
                        <motion.h1
                            className='sm:text-2xl text-xl font-semibold pt-5'
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Preparing the hard way
                        </motion.h1>
                        <motion.h2
                            className='text-[#474747] text-lg pb-5'
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Endless hours, no clear feedback.
                        </motion.h2>
                        <hr />
                        <motion.h3
                            className='sm:text-xl text-lg font-semibold pt-5'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            Why this Sucks:
                        </motion.h3>
                        <ul className='space-y-5 mt-5 text-md'>
                            <li className='text-[#474747a7]  font-medium'>Lose 8–10 hrs/week on unfocused prep</li>

                            <li className='text-[#474747a7] font-medium'>Spend $200–$500/month on coaches</li>

                            <li className='text-[#474747a7]  font-medium'>Mentally drained from guessing</li>

                            <li className='text-[#474747a7]  font-medium'>Miss job offers due to weak answers</li>
                        </ul>
                    </div>
                </div>
                <div className=' h-150 w-full sm:w-1/3  p-6 shadow-xl shadow-gray-300 rounded-xl'>
                    <div className='h-1/3 w-full bg-amber-950  rounded-lg'>
                    </div>
                    <div>
                        <motion.h1
                            className='sm:text-2xl text-lg font-semibold pt-5'
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Preparing with Arivana AI
                        </motion.h1>
                        <motion.h2
                            className='text-[#474747] text-lg pb-5'
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            AI-driven interviews + instant feedback.
                        </motion.h2>
                        <hr />
                        <motion.h3
                            className='sm:text-xl text-lg font-semibold pt-5'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            Why this Works:
                        </motion.h3>
                        <ul className='space-y-3 mt-5 text-md'>
                            <li className='text-[#474747a7]  font-medium'>Save 8–10 hrs/week with targeted practice</li>

                            <li className='text-[#474747a7]  font-medium'>Save $200–$500/month on coaching</li>

                            <li className='text-[#474747a7]  font-medium'>No guesswork — instant improvements</li>

                            <li className='text-[#474747a7]  font-medium'>Land more offers with confident answers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
