import React from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
export function PaginationGroup() {
  const [active, setActive] = React.useState(1);
 
  const getItemProps = (index) => ({
    className: active === index ? "bg-[#F3D284] text-[#0E1215]" : "text-[#FF0052]",
    onClick: () => setActive(index),
  });
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <ButtonGroup variant="outlined" className="bg-white rounded">
      <IconButton onClick={prev}>
        <img src='https://i.ibb.co/pyJmbtt/image.png'/>
      </IconButton>
      <IconButton {...getItemProps(1)}>1</IconButton>
      <IconButton {...getItemProps(2)}>2</IconButton>
      <IconButton {...getItemProps(3)}>3</IconButton>
      <IconButton {...getItemProps(4)}>4</IconButton>
      <IconButton {...getItemProps(5)}>5</IconButton>
      <IconButton onClick={next}>
        <img src='https://i.ibb.co/t2b48BF/image.png' />
      </IconButton>
    </ButtonGroup>
  );
}