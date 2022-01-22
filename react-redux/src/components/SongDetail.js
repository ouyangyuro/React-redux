import React from 'react';
import { connect } from 'react-redux';

//可以不寫 SongDetail(props) 而直接寫 SongDetail({ selSong }) 取 mapStateProps return 的 selSong，這樣不用寫很長的 {props.selSong.title} 而直接寫 {selSong.title}
function SongDetail({ selSong }) {
  console.log('SongDetail selSong props', selSong); //for check
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-teal-400">
        {/* Selected Song title start */}
        <p className="px-6 py-4 font-bold text-xl mb-2">
          Selected Song Details
        </p>
        {/* Selected Song title end */}
        <div className="px-6 pt-4 pb-2">
          {/* Selected Song details start */}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
            Title: {selSong ? selSong.title : ''}
          </span>
          <br />
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
            Length: {selSong ? selSong.duration : ''}
          </span>
          {/* Selected Song details end */}
        </div>
      </div>
    </>
  );
}

// below looking for store's reducers
const mapStateProps = (state) => {
  console.log("get state's selectedSong:", state.selectedSong); //for check
  return { selSong: state.selectedSong };
};

export default connect(mapStateProps)(SongDetail);
