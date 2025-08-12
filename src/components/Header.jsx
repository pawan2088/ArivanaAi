import React from 'react'

const Header = () => {
    return (
        <div className="w-full flex justify-center mt-4">
            <div className="flex items-center gap-3 text-gray-900  border-1 rounded-full py-1 px-3 border-gray-300">
                <span className="inline-flex items-center gap-2 ">
                    <span className="relative flex size-3 ">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex size-3 rounded-full bg-green-600"></span>
                    </span>
                    We're Live
                </span>
                <span className="font-semibold">& Hiring Ready</span>
                
            </div>
            <h1>Turn your Ideas into Viral Videos 
in under 15 minutes</h1>
        </div>
    )
}

export default Header
