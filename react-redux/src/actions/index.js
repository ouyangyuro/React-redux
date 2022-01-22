// Action Creator

//選擇歌曲
export const selectSong = (song) => {
  // return ab action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
