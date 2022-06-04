import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservations } from '../features/reservationSlice';
import { addCustomer } from '../features/customerSlice';

function ResCard({ val, index }) {
  const dispatch = useDispatch();

  return (
    <>
      <p
        onClick={() => {
          dispatch(removeReservations(index));
          dispatch(addCustomer({ name: val, food: [] }));
        }}
        className="border p-2 mb-1 mr-1 rounded shadow-md bg-gray-100 cursor-pointer"
      >
        {val}
      </p>
    </>
  );
}

export default ResCard;
