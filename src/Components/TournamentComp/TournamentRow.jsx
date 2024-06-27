import React from 'react'

const TournamentRow = ({ data }) => {
  return (
    <div className='flex flex-row justify-between items-center gap-5 border-t border-gray-200'>
    <div className='flex flex-row mb-2 text-white font-semibold capitalize'>
      <h1>{data.name}</h1>
    </div>
    <div className='flex flex-row gap-[3.2rem] text-white font-semibold uppercase'>
      {[data.startTime, data.endTime, data.players, data.prize].map(item => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
    <div className='flex flex-row gap-[7rem] text-white font-semibold uppercase'>
      {[data.entryFee, data.bonus].map(item => (
        <h1 key={item}>{item}</h1>
      ))}
    </div>
  </div>
  );
}

export default TournamentRow