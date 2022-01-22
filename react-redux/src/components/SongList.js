import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

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
            {/* button start */}
            <button
              type="button"
              className="bg-white dark:bg-slate-100 text-slate-900 dark:text-slate-700 hover:text-teal-400 m-2 w-20 h-10 ring-1 rounded-lg ring-slate-900/5 shadow-md"
              // 這裡利用click事件觸發 dispatch(action),這邊不需要特別寫dispatch
              onClick={() => props.selectSong(song)}
            >
              select
            </button>
            {/* button end */}
          </div>
        );
      })}
    </>
  );
}

// below looking for store's reducers
const mapStateProps = (state) => {
  console.log('get state:', state); //for check
  return { songs: state.songs };
};

// SongList 的 props 是由 mapStateProps return 的是什麼 SongList 的 props 就接到什麼, 利用redux 的 connect來做連接;connect(function放從store取出來的資料做return,{放action function})(接收return資料的function)
export default connect(mapStateProps, { selectSong })(SongList);
