import React from 'react'

const Section6 = () => {
    return (
        <div>
            <section className='flex flex-col sm:px-130  mt-20 items-center justify-center'>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <img src="https://i.ibb.co/99bLZ2dz/IMG-20250613-WA0001-1.jpg" alt="Profile" className="w-30 h-30 rounded-full object-cover" />
                    <h1 id='blog' className='sm:text-4xl text-xl font-semibold'>Hi, It’s Sahil From Arivana AI</h1>
                </div>
                <br />
                <div className='flex justify-center items-center sm:px-1 px-10'>
                    <div className=' flex flex-col justify-start'>
                    <p className='font-semibold'>I used to struggle with interview preparation.</p><br /> 

                <p>
                    I knew the answers — but saying them <br /> confidently was always hard.<br />
                    And hours of random practice felt exhausting.
                </p><br /> 

                <p>
                    I kept delaying mock sessions.<br /> 
                    One week turned into one month… then none.<br /> 
                </p><br /> 

                <p class="font-semibold">
                    That’s why I built Arivana AI.
                </p><br /> 

                <p>
                    It gives you realistic mock interviews<br />with instant,personalised feedback.
                </p><br /> 

                <p>
                    No overthinking. No wasted time.<br />
                    Just focused practice in under 15 minutes.
                </p><br /> 

                <p>
                    If you keep putting interview prep off,<br /><br /> 
                    <strong>Arivana AI makes it easy to stay consistent.</strong>
                </p><br /> 

                </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                <button class="mt-4 sm:w-80  w-80  py-4 bg-black text-white rounded-lg text-center sm:text-lg font-bold">
                    Start Your First Mock Interview Now
                </button>
                </div>
            </section>
        </div>
    )
}

export default Section6
