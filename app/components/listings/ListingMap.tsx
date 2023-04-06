"use client";

import dynamic from "next/dynamic";
import useCountries from "@/app/hooks/useCountries";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingMapProps {
  locationValue: string;
}

const ListingMap: React.FC<ListingMapProps> = ({ locationValue }) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-3 flex flex-col gap-8">
      <span className="font-semibold text-xl">Hosting Location</span>
      <div>
        <Map center={coordinates} />
      </div>
    </div>
  );
};

export default ListingMap;
