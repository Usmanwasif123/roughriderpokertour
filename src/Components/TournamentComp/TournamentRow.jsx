import React from 'react'

const TournamentRow = ({ data }) => {
  if (!data) return null; // Add null check to handle undefined data

  return (
    <div className='flex flex-row justify-between items-center gap-5 border-t border-gray-200'>
    <div className='flex flex-row mb-2 text-white font-semibold capitalize text-xs md:text-md lg:text-lg px-1 md:px-0 lg:px-0'>
      <h1>{data.name}</h1>
    </div>
    <div className='flex flex-row gap-6 md:gap-[3.2rem] text-white font-semibold uppercase text-xs md:text-md lg:text-lg px-1 md:px-0 lg:px-0'>
      {[data.startTime, data.endTime, data.players, data.prize].map(item => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
    <div className='flex flex-row gap-5 md:gap-10 lg:gap-[7rem] text-white font-semibold uppercase text-xs md:text-md lg:text-lg px-1 md:px-0 lg:px-0'>
      {[data.entryFee, data.bonus].map(item => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  </div>
  );
}

export default TournamentRow