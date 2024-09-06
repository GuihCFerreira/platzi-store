"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

interface PaginationProps {
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ offset, setOffset }: PaginationProps) => {
  const handlePrevious = () => {
    setOffset((prevOffset) => {
      console.log("Previous offset:", prevOffset); // Verifique o valor atual do offset
      return prevOffset - 5;
    });
  };

  const handleNext = () => {
    setOffset((prevOffset) => {
      console.log("Next offset:", prevOffset); // Verifique o valor atual do offset
      return prevOffset + 5;
    });
  };

  return (
    <div className="flex items-center w-full justify-between sm:justify-around">
      {offset >= 5 && (
        <Button variant={"secondary"} onClick={handlePrevious}>
          <ArrowLeftIcon />
          Anterior
        </Button>
      )}

      <Button variant={"secondary"} onClick={handleNext}>
        Próxima
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default Pagination;
