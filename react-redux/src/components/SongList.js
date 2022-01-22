import React from 'react';
import { connect } from 'react-redux';

function SongList(props) {
  console.log('SongList props:', props); //for check
  return (
    <>
      {props.songs.map((song, i) => {
        return (
          <div
            key={i}
            className="bg-white dark:bg-slate-800 rounded p-4 w-80 m-3 inline-block"
          >
            {/* title start */}
            <p className="text-slate-900 dark:text-slate-50 font-semibold text-lg">
              {song.title}
            </p>
            {/* title end */}
            <div className="flex justify-between text-sm">
              {/* duration start */}
              <div className="text-cyan-500 dark:text-slate-100">
                {song.duration}
              </div>
              {/* duration end */}
              {/* button start */}
              <button
                type="button"
                className="bg-white dark:bg-slate-100 text-slate-900 dark:text-slate-700 hover:text-teal-400 m-2 w-20 h-10 ring-1 rounded-lg ring-slate-900/5 shadow-md"
              >
                select
              </button>
              {/* button end */}
            </div>
          </div>
        );
      })}

      {/* Selected Song start */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-teal-400">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Selected Song</div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
        </div>
      </div>
      {/* Selected Song end */}
    </>
  );
}

// below looking for store's reducers
const mapStateProps = (state) => {
  console.log('get state:', state); //for check
  return { songs: state.songs };
};

// SongList 的 props 是由 mapStateProps return 的是什麼 SongList 的 props 就接到什麼, 利用redux 的 connect來做連接;connect(function放從store取出來的資料做return)(接收return資料的function)
export default connect(mapStateProps)(SongList);
