import React from 'react'
import Navbar from '../LandingComp/Navbar';
import Footer from '../LandingComp/Footer';
import TournamentRow from './TournamentRow';
import { PaginationGroup } from './Pagination';

const OurTournament = () => {
    const tournamentData = [
        {
          name: 'The Wild Card',
          startTime: '12:00',
          endTime: '12:40',
          players: 542,
          prize: '$1500',
          entryFee: '$50',
          bonus: 'Yes'
        },
        {
          name: 'Ace Showdown',
          startTime: '13:00',
          endTime: '13:30',
          players: 320,
          prize: '$1000',
          entryFee: '$30',
          bonus: 'No'
        },
        {
          name: 'King\'s Cupshow',
          startTime: '14:00',
          endTime: '14:45',
          players: 400,
          prize: '$2000',
          entryFee: '$70',
          bonus: 'Yes'
        },
        {
            name: 'The Wild Card',
            startTime: '12:00',
            endTime: '12:40',
            players: 542,
            prize: '$1500',
            entryFee: '$50',
            bonus: 'Yes'
          },
          {
            name: 'Ace Showdown',
            startTime: '13:00',
            endTime: '13:30',
            players: 320,
            prize: '$1000',
            entryFee: '$30',
            bonus: 'No'
          },
         {
          name: 'King\'s Cupshow',
          startTime: '14:00',
          endTime: '14:45',
          players: 400,
          prize: '$2000',
          entryFee: '$70',
          bonus: 'Yes'
        },
        {
            name: 'The Wild Card',
            startTime: '12:00',
            endTime: '12:40',
            players: 542,
            prize: '$1500',
            entryFee: '$50',
            bonus: 'Yes'
          },
          {
            name: 'Ace Showdown',
            startTime: '13:00',
            endTime: '13:30',
            players: 320,
            prize: '$1000',
            entryFee: '$30',
            bonus: 'No'
          },
          {
            name: 'King\'s Cupshow',
            startTime: '14:00',
            endTime: '14:45',
            players: 400,
            prize: '$2000',
            entryFee: '$70',
            bonus: 'Yes'
          },
          {
              name: 'The Wild Card',
              startTime: '12:00',
              endTime: '12:40',
              players: 542,
              prize: '$1500',
              entryFee: '$50',
              bonus: 'Yes'
            },
            {
              name: 'Ace Showdown',
              startTime: '13:00',
              endTime: '13:30',
              players: 320,
              prize: '$1000',
              entryFee: '$30',
              bonus: 'No'
            },
            {
                name: 'King\'s Cupshow',
                startTime: '14:00',
                endTime: '14:45',
                players: 400,
                prize: '$2000',
                entryFee: '$70',
                bonus: 'Yes'
              },
              {
                  name: 'The Wild Card',
                  startTime: '12:00',
                  endTime: '12:40',
                  players: 542,
                  prize: '$1500',
                  entryFee: '$50',
                  bonus: 'Yes'
                },
                {
                  name: 'Ace Showdown',
                  startTime: '13:00',
                  endTime: '13:30',
                  players: 320,
                  prize: '$1000',
                  entryFee: '$30',
                  bonus: 'No'
                },
                {
                    name: 'King\'s Cupshow',
                    startTime: '14:00',
                    endTime: '14:45',
                    players: 400,
                    prize: '$2000',
                    entryFee: '$70',
                    bonus: 'Yes'
                  },
      ];

  return (
    <>
    <div className="px-2 md:px-10 bg-[#13181C]">
    <Navbar/>
    </div>
    <section className="relative mx-auto max-w-full sm:static -mt-45 md:-mt-24 2xl:-mt-116 z-10">
    <div>
    <img src='https://i.ibb.co/k44fkvW/roulette-wheel-glimmers-amidst-bustling-casino-floor-1.png' className="h-[50rem] w-full md:h-full" alt='banner'/>
    <div className="grid w-full grid-cols-1 mx-auto lg:grid-cols-1">
      <div className="z-20 mt-80 md:-mt-100 flex flex-col justify-center items-center">
        <h1 className="my-3 md:my-5 font-[Cinzel] text-xl lg:text-6xl uppercase 2xl:text-7xl font-bold leading-none tracking-tighter text-white uppercase">
        our Tournament
        </h1>
        <div className='text-white uppercase text-lg font-[Barlow] cursor-pointer'>
        <h2>
            <span className='text-[#FF0052]'>Home</span> / Tournament
        </h2>
        </div>
        
      </div>
    </div>
  </div>
  </section>
    <div className='bg-[#13181C] w-full flex flex-col justify-between items-center p-10'>
    <div className='bg-[#F3D284] w-3/4 mt-8 p-6 grid grid-cols-1 gap-6 sm:grid-cols-1 flex flex-col rounded-t-lg'>
    <div className='flex flex-row gap-12 justify-center items-center'>
       <button className='border-2 border-[#FE0308] px-3 py-1 rounded uppercase bg-[#FE0308] text-white font-bold text-md font-[barlow]'>Past Events</button>
       <button className='text-black font-bold text-md uppercase font-[barlow]'>Upcoming Events</button>
       <button className='text-black font-bold text-md uppercase font-[barlow]'>Ongoing Event </button>
       <button className='text-[#FF0000] font-bold text-md uppercase font-[barlow]'>Live</button>
    </div>
    </div>
    <div className='bg-[#0E1215] w-3/4 p-5 mb-10 grid grid-cols-1 gap-6 sm:grid-cols-1 flex flex-col rounded-b-lg'>
        <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row mb-2 text-white font-bold uppercase'>
            <h1>Tournament</h1>
        </div>
        <div className='flex flex-row gap-4 text-white font-bold uppercase'>
           {['Starts In', 'Ends In', 'Players', 'Prize($)'].map(item => (
        <h1 key={item}>{item}</h1>
      ))}
        </div>
        <div className='flex flex-row gap-[3rem] text-white font-bold uppercase'>
        {['Entry Fee', 'Bonus'].map(item => (
        <h1 key={item}>{item}</h1>
      ))}
        </div>
        </div>
        {tournamentData.map((tournament, index) => (
      <TournamentRow key={index} data={tournament} />
    ))}
    <div className='flex flex-row justify-between items-center border-t-2 border-grey-200'>
        <div className='mt-3 text-white font-[Oswald] font-bold text-lg uppercase'>
            <h1>102 Tournament results</h1>
        </div>
        <div className='mt-3'>
            <PaginationGroup />
        </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default OurTournament