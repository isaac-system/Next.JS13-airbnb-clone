"use client";

import { Range } from "react-date-range";
import Calendar from "../ui/inputs/Calendar";
import Button from "../ui/buttons/Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div
      className="
            bg-white
            border-[1px]
            border-neutral-200
            overflow-hidden
            shadow-lg
            md:rounded-xl
        "
    >
      <div className="flex flex-row justify-between items-center">
        <div
          className="
            flex flex-row items-center gap-1 p-4
        "
        >
          <div className="text-md md:text-2xl font-semibold">$ {price}</div>
          <div className="text-sm md:text-md font-light text-neutral-600">
            / night
          </div>
        </div>
        <div className="md:hidden p-4">
          <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
        </div>
      </div>
      <hr />
      <div className="hidden md:block">
        <Calendar
          value={dateRange}
          disabledDates={disabledDates}
          onChange={(value) => onChangeDate(value.selection)}
        />
        <hr />

        <div className="p-4">
          <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
        </div>
        <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
          <div>Total</div>
          <div>$ {totalPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingReservation;
