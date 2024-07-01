import React, {useState} from 'react'
import Navbar from '../LandingComp/Navbar';
import Footer from '../LandingComp/Footer';
import TournamentRow from './TournamentRow';
import { PaginationGroup } from './Pagination';

const tournamentData = [
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'past', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'past', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'past', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'past', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'past', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'past', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'past', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'past', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'past', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'upcoming', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'upcoming', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'upcoming', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'ongoing', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'ongoing', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'ongoing', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'ongoing', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'ongoing', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'ongoing', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'ongoing', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'ongoing', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'ongoing', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'ongoing', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'ongoing', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'ongoing', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'live', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'live', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'live', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'live', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'live', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'live', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'live', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'live', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'live', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  { category: 'live', name: 'The Wild Card', startTime: '12:00', endTime: '12:40', players: 542, prize: '$1500', entryFee: '$50', bonus: 'Yes'},
  { category: 'live', name: 'Ace Showdown', startTime: '13:00', endTime: '13:30', players: 320, prize: '$1000', entryFee: '$30', bonus: 'No'},
  { category: 'live', name: 'King\'s Cupshow', startTime: '14:00', endTime: '14:45', players: 400, prize: '$2000', entryFee: '$70', bonus: 'Yes'},
  
  
];

const OurTournament = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('past'); // State to track active category
  const itemsPerPage = 10; // Number of items per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tournamentData.filter(tournament => tournament.category === activeCategory).slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  
  // Function to filter tournaments based on category
  const filterTournamentsByCategory = (category) => {
    return tournamentData.filter(tournament => tournament.category === category);
  };

  // Handler for button click to switch category
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };


  return (
    <>
    <div className="px-2 md:px-10 bg-[#13181C]">
    <Navbar/>
    </div>
    <section className="relative mx-auto max-w-full">
  <div className="relative">
    <img
      src="https://i.ibb.co/k44fkvW/roulette-wheel-glimmers-amidst-bustling-casino-floor-1.png"
      className="h-64 w-full md:h-[50rem] lg:h-full"
      alt="banner"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
      <h1 className="my-3 md:my-5 font-[Cinzel] text-3xl md:text-5xl lg:text-6xl xl:text-7xl uppercase font-bold leading-none tracking-tighter">
        our Tournament
      </h1>
      <h2 className="text-base md:text-2xl lg:text-4xl cursor-pointer uppercase font-[Barlow]">
        <span className="text-[#FF0052]">Home</span> / Tournament
      </h2>
    </div>
  </div>
</section>
    <div className='bg-[#13181C] w-full flex flex-col justify-between items-center p-10'>
    <div className='bg-[#F3D284] w-full md:w-3/4 p-6 grid grid-cols-1 gap-0 md:gap-6 sm:grid-cols-1 flex flex-col rounded-t-lg'>
    <div className='flex flex-row gap-2 md:gap-12 justify-center items-center'>
    <button
        className={`px-2 md:px-3 py-1 rounded uppercase font-bold text-sm md:text-md font-[barlow] ${activeCategory === 'past' ? 'text-white bg-[#FE0308] border-[#FE0308]' : 'text-black'}`}
        onClick={() => handleCategoryChange('past')}
      >
        Past Events
      </button>
      <button
        className={`px-2 md:px-3 py-1 rounded uppercase font-bold text-sm md:text-md font-[barlow] ${activeCategory === 'upcoming' ? 'text-white bg-[#FE0308] border-[#FE0308]' : 'text-black'}`}
        onClick={() => handleCategoryChange('upcoming')}
      >
        Upcoming Events
      </button>
      <button
        className={`px-2 md:px-3 py-1 rounded uppercase font-bold text-sm md:text-md font-[barlow] ${activeCategory === 'ongoing' ? 'text-white bg-[#FE0308] border-[#FE0308]' : 'text-black'}`}
        onClick={() => handleCategoryChange('ongoing')}
      >
        Ongoing Events
      </button>
      <button
        className={`px-2 md:px-3 py-1 rounded uppercase font-bold text-sm md:text-md font-[barlow] ${activeCategory === 'live' ? 'text-white bg-[#FE0308] border-[#FE0308]' : 'text-[#FE0308]'}`}
        onClick={() => handleCategoryChange('live')}
      >
        Live
      </button>
    </div>
    </div>
    <div className='bg-[#0E1215] w-full md:w-3/4 p-4 mb-10 grid grid-cols-1 gap-6 sm:grid-cols-1 flex flex-col rounded-b-lg'>
        <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row lg:mb-2 gap-1 px-1 md:px-0 md:gap-0 text-white font-bold text-xs md:text-md lg:text-lg uppercase'>
            <h1>{['Tournament']}</h1>
        </div>
        <div className='flex flex-row gap-1.5 md:gap-4 px-1 md:px-0 text-white text-xs md:text-md lg:text-lg font-bold uppercase'>
           {['Starts In', 'Ends In', 'Players', 'Prize($)'].map(item => (
        <h1 key={item}>{item}</h1>
      ))}
        </div>
        <div className='flex flex-row gap-1 md:gap-2 lg:gap-[3rem] px-1 md:px-0 text-white text-xs md:text-md lg:text-lg font-bold uppercase'>
        {['Entry Fee', 'Bonus'].map(item => (
        <h1 key={item}>{item}</h1>
      ))}
        </div>
        </div>
        {/* Render rows based on current page */}
        {currentItems.map((tournament, index) => (
        <TournamentRow key={index} data={tournament} />
      ))}

       {/* Example of using tournamentData directly */}
       {filterTournamentsByCategory(activeCategory).map((tournament, index) => (
        <TournamentRow key={index} tournament={tournament} />
      ))}

      
    {/* Pagination */}
    <div className='flex flex-row justify-between items-center'>
        <div className='mt-3 text-white font-[Oswald] font-bold uppercase text-sm md:text-lg'>
          <h1>{tournamentData.filter(tournament => tournament.category === activeCategory).length} Tournament results</h1>
        </div>
        <div className='mt-3'>
          <PaginationGroup totalItems={tournamentData.length} onPageChange={handlePageChange} />
        </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default OurTournament