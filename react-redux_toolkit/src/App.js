import { useState, useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { addReservations } from './features/reservationSlice';
import { getPosts } from './features/apiSlice';

import ResCard from './components/ResCard';
import CusCard from './components/CusCard';

function App() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  // console.log('name:', name); //for check

  useEffect(() => {
    dispatch(getPosts()); //call api
    // Safe to add dispatch to the dependencies array (the React hooks lint rules do not know that dispatch should be stable, and will warn that the dispatch variable should be added to dependency arrays for useEffect and useCallback. The simplest solution is to do just that) https://react-redux.js.org/api/hooks#usedispatch
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.value);
  // console.log('reservations state:', reservations); //for check

  const customers = useSelector((state) => state.customers.value);
  // console.log('customers state:', customers); //for check

  const posts = useSelector((state) => state.postsApi.posts);
  console.log('posts state:', posts); //for check

  const handleAdd = () => {
    if (!name) return; //name = "" will be return
    dispatch(addReservations(name));
    setName('');
  };

  return (
    <>
      <div className="w-full px-4 py-16">
        <div className="w-full max-w-4xl h-full min-h-[24rem] p-2 mx-auto bg-slate-800 rounded-2xl text-cyan-400">
          <div className="h-[23rem] flex">
            {/* Reservations */}
            <div className="bg-slate-600 m-2 p-2 flex flex-col justify-between rounded">
              <div>
                <h2 className="text-lg mb-2">Reservations</h2>

                {reservations.map((val, i) => {
                  return <ResCard val={val} index={i} key={i} />;
                })}
              </div>
              <div className="flex flex-col mt-2">
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <button
                  onClick={handleAdd}
                  className="border border-gray-300 rounded mt-2 hover:bg-gray-300"
                >
                  ADD Res
                </button>
              </div>
            </div>

            {/* order */}
            <div className="bg-slate-600 m-2 p-2 flex-grow rounded">
              <h2 className="text-lg mb-2">Order</h2>
              {customers.map((val, i) => {
                return <CusCard val={val} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
