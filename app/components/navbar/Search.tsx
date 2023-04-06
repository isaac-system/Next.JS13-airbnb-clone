"use client";

import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Anywhere";
  }, [getByValue, locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);

      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Any Week";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }
    return "Add Guests";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="flex border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm 
     hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-col flex-grow px-6 md:flex-row items-start md:items-center justify-start md:justify-between">
        <div className="text-sm font-semibold md:px-6">{locationLabel}</div>
        <div
          className="
            md:hidden
            text-xs
            flex
            flex-row
            gap-2
            text-gray-400
          "
        >
          <div>{durationLabel}</div>
          <div>&#183;</div>
          <div>{guestLabel}</div>
        </div>
        <div
          className="
            hidden
            md:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center
          "
        >
          {durationLabel}
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden md:block">{guestLabel}</div>
        </div>
      </div>
      <div
        className="
            hidden
            md:inline-flex
            md:mx-2
            p-2 bg-rose-500 rounded-full text-white
          "
      >
        <BiSearch />
      </div>
    </div>
  );
};

export default Search;
