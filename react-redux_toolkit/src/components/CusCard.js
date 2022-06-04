import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../features/customerSlice';

function CusCard({ val }) {
  const dispatch = useDispatch();
  //   console.log('CusCard Val:', val); //for check

  const [food, setFood] = useState('');
  // console.log('food:', food); //for check

  const handleFood = () => {
    if (!food) return; //name = "" will be return
    dispatch(addFood({ name: val.name, food: food }));
    setFood('');
  };

  return (
    <>
      <div className="border p-2 mb-2 mr-1 rounded shadow-md bg-gray-100">
        <p>{val.name}</p>
        <div className="flex">
          {val.food.map((val, i) => {
            return (
              <p key={i} className="mr-2 mb-1 bg-slate-300 px-2 rounded">
                {val}
              </p>
            );
          })}
        </div>
        <div className="sm:flex sm:flex-row sm:justify-end">
          <input
            className="w-full"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <button
            className="border border-gray-300 rounded px-2 hover:bg-gray-300 w-full sm:w-fit"
            onClick={handleFood}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default CusCard;
