import React from 'react'
import { motion } from 'framer-motion'

const Section3 = () => {
    return (
        <div className='flex flex-col items-center p-5'>
            <div className='border-1 border-base-300 mt-20 p-1 rounded-full'>
                                        <motion.div
                                            id='features'
                                            className='text-lg font-bold border-1 border-base-300 p-2 rounded-full text-[#474747] flex justify-center items-center'
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.7 }}
                                        >   <img src="/asset 10.png" alt="" className='w-8'/>
                                             Features
                                        </motion.div>
                </div>
                        <motion.h2
                            className='sm:text-4xl text-xl font-bold mt-10'
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Everything You Need
                        </motion.h2>
                        <motion.h2
                            className='sm:text-4xl text-xl font-bold'
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            For Smarter Interview Prep
                        </motion.h2>
            <div className='flex flex-wrap justify-center gap-4 '>
                
                <div className=' flex flex-col gap-5  mt-10 items-center sm:justify-center'>
                                        <motion.div
                                            className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7 }}
                                        >
                                            <div className='flex gap-2'>
                                                <img src="https://framerusercontent.com/images/kGl4rFMP6t55xn0CnsvGLvaXk.webp" className='w-8' alt="" />
                                                <motion.span className='text-xl font-bold' initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Engaging Questions</motion.span>
                                            </div>
                                            <motion.p className='text-[#474747]' initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Get role-specific, realistic interview questions instantly.</motion.p>
                                        </motion.div>
                                        <motion.div
                                            className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, delay: 0.1 }}
                                        >
                                            <div className='flex gap-2'>
                                                <img src="https://framerusercontent.com/images/VQmHLH0A5oOrQdzo2xOAQQsuk.webp" className='w-8' alt="" />
                                                <motion.span className='text-xl font-bold' initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Zero Learning Curve</motion.span>
                                            </div>
                                            <motion.p className='text-[#474747]' initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Just answer like you’re in a real interview — no setup.</motion.p>
                                        </motion.div>
                                        <motion.div
                                            className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, delay: 0.2 }}
                                        >
                                            <div className='flex gap-2'>
                                                <img src="https://framerusercontent.com/images/5HOPhdm60rgv2QcFHxjuRDB5cg.png" className='w-8' alt="" />
                                                <motion.span className='text-xl font-bold' initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Auto Transcripts</motion.span>
                                            </div>
                                            <motion.p className='text-[#474747]' initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Every answer transcribed perfectly, even with accents.</motion.p>
                                        </motion.div>
                </div>
                <div className=' flex flex-col sm:mt-10 mt-5 gap-5 items-center sm:justify-center'>
                                        <motion.div
                                            className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7 }}
                                        >
                                            <div className='flex gap-2'>
                                                <img src="https://framerusercontent.com/images/PnnOJvAaoRUpX69maYRITfj1xZY.webp" className='w-8' alt="" />
                                                <motion.span className='text-xl font-bold' initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Realistic AI Interviewer</motion.span>
                                            </div>
                                            <motion.p className='text-[#474747]' initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Natural conversation — no robotic feel — feels human .</motion.p>
                                        </motion.div>
                                        <motion.div
                                            className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, delay: 0.1 }}
                                        >
                                            <div className='flex gap-2'>
                                                <img src="https://framerusercontent.com/images/PnnOJvAaoRUpX69maYRITfj1xZY.webp" className='w-8 ' alt="" />
                                                <motion.span className='text-xl font-bold' initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Personalised Feedback</motion.span>
                                            </div>
                                            <motion.p className='text-[#474747]' initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>AI analyses your strengths & areas to improve  .</motion.p>
                                        </motion.div>
                                        <motion.div
                                            className='flex flex-col gap-3 w-full max-w-md mx-2 py-5 border-1 border-gray-200 rounded-xl p-4 shadow-lg shadow-gray-200 px-4 sm:px-8 bg-white'
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.7, delay: 0.2 }}
                                        >
                                            <div className='flex gap-2'>
                                                <img src="https://framerusercontent.com/images/LMxmhUwrllI0jM0Xvy84fvwoYyI.webp" className='w-8 ' alt="" />
                                                <motion.span className='text-xl font-bold' initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Answer Improve Mode</motion.span>
                                            </div>
                                            <motion.p className='text-[#474747]' initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>Get refined versions of your answers instantly  .</motion.p>
                                        </motion.div>
                </div>
            </div>


        </div>
    )
}

export default Section3
