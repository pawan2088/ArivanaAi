import React from 'react'

const Section6 = () => {
    return (
        <div>
            <section className='flex flex-col sm:px-150  mt-20 '>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <img src="https://i.ibb.co/99bLZ2dz/IMG-20250613-WA0001-1.jpg" alt="Profile" className="w-30 h-30 rounded-full object-cover" />
                    <h1 id='blog' className='sm:text-3xl text-xl font-semibold'>Hi, It’s Sahil From Arivana AI</h1>
                </div>
                <br />
                <div className='px-10 '>
                    <p className='font-semibold'>I used to struggle with interview preparation.</p><br /> 

                <p>
                    I knew the answers — but saying them <br /> confidently was always hard.<br /><br /> 
                    And hours of random practice felt exhausting.
                </p>

                <p>
                    I kept delaying mock sessions.<br /> <br /> 
                    One week turned into one month… then none.<br /> <br /> 
                </p>

                <p class="font-semibold">
                    That’s why I built Arivana AI.<br /> <br /> 
                </p>

                <p>
                    It gives you realistic mock interviews with instant, personalised feedback.
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
                <div className='flex justify-center w-full'>
                <button class="mt-4 sm:w-full  w-80  py-4 bg-black text-white rounded-lg text-center sm:text-lg font-bold">
                    Start Your First Mock Interview Now
                </button>
                </div>
            </section>
        </div>
    )
}

export default Section6
