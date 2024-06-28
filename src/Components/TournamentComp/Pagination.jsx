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
    <ButtonGroup variant="outlined" className="bg-white rounded">
      <IconButton onClick={prevPage}>
        <img src='https://i.ibb.co/pyJmbtt/image.png'/>
      </IconButton>
      {[...Array(totalPages)].map((_, index) => (
        <IconButton
          key={index}
          onClick={() => changePage(index + 1)}
          className={activePage === index + 1 ? "bg-[#F3D284] text-[#0E1215]" : "text-[#FF0052]"}
        >
          {index + 1}
        </IconButton>
      ))}
      <IconButton onClick={nextPage}>
        <img src='https://i.ibb.co/t2b48BF/image.png' />
      </IconButton>
    </ButtonGroup>
  );
}