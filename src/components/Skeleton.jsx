import React from 'react'

const Skeleton = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-cyan-200 via-violet-300 to-sky-200">
      <div className="h-[450px] w-[700px] border-4 border-white bg-[#ddb9ff] opacity-80 rounded-[43px] relative z-20 shadow-lg">
        <div className="flex gap-5 h-[450px] w-[670px] bg-[#c1edf8] opacity-90 border-2 border-white rounded-[43px] absolute top-3 left-3 p-6">
          <div className="p-4 flex justify-center">
            <div className="w-52 h-52 rounded-full bg-gray-300 animate-pulse" />
          </div>
          <div className="flex-1">
            <div className="mt-4 flex flex-col space-y-4">
              <div className="h-6 w-40 bg-gray-300 rounded animate-pulse" />
              <div className="h-4 w-60 bg-gray-300 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-300 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-6">
              <div className="flex flex-col items-center space-y-2">
                <div className="h-6 w-12 bg-gray-300 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-300 rounded animate-pulse" />
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="h-6 w-12 bg-gray-300 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-300 rounded animate-pulse" />
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="h-6 w-16 bg-gray-300 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-300 rounded animate-pulse" />
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <div className="h-10 w-24 bg-gray-300 rounded-lg animate-pulse" />
              <div className="h-10 w-32 bg-gray-300 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton;
