"use client";

import { IconType } from "react-icons";

import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  roomCount: number;
  guestCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  bathroomCount,
  category,
  description,
  guestCount,

  roomCount,
  user,
}) => {
  return (
    <>
      <div className="col-span-4 flex flex-col gap-8">
        <div className="flex flex-row ">
          <div className="flex flex-col gap-2 flex-grow">
            <div
              className="
                text-xl
                font-semibold
            "
            >
              Hosted by {user?.name}
            </div>
            <div
              className="
                flex
                flex-row
                items-center
                gap-4
                font-light
                text-neutral-400   
            "
            >
              <div>{guestCount} guests</div>
              <div>{roomCount} rooms</div>
              <div>{bathroomCount} bathrooms</div>
            </div>
          </div>
          <div className="relative w-[60px]">
            <Avatar src={user?.image} fill />
          </div>
        </div>
        <hr />
        {category && (
          <ListingCategory
            icon={category.icon}
            label={category.label}
            description={category.description}
          />
        )}
        <hr />
        <div className="text-lg font-light text-neutral-500">{description}</div>
      </div>
    </>
  );
};

export default ListingInfo;
