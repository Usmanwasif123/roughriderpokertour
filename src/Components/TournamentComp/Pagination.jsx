import React, {useState} from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";

const itemsPerPage= 10 // items per page

 
export function PaginationGroup({totalItems, onPageChange}) {
  const [activePage, setActivePage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
 
  const changePage = (page) => {
    setActivePage(page);
    onPageChange(page);
  };

  const prevPage = () => {
    if (activePage > 1) {
      changePage(activePage - 1);
    }
  };

  const nextPage = () => {
    if (activePage < totalPages) {
      changePage(activePage + 1);
    }
  };
 
   return (
    <div className="flex flex-wrap justify-center items-center p-4">
      <ButtonGroup variant="outlined" className="bg-white rounded flex flex-wrap justify-center">
        <IconButton onClick={prevPage} className="flex justify-center items-center">
          <img src="https://i.ibb.co/pyJmbtt/image.png" alt="Previous"/>
        </IconButton>
        {[...Array(totalPages)].map((_, index) => (
          <IconButton
            key={index}
            onClick={() => changePage(index + 1)}
            className={`${
              activePage === index + 1
                ? "bg-[#F3D284] text-[#0E1215]"
                : "text-[#FF0052]"
            } flex justify-center items-center w-6 h-6 sm:w-8 sm:h-8 m-1`}
          >
            {index + 1}
          </IconButton>
        ))}
        <IconButton onClick={nextPage} className="flex justify-center items-center">
          <img src="https://i.ibb.co/t2b48BF/image.png" alt="Next"/>
        </IconButton>
      </ButtonGroup>
    </div>
  );
}