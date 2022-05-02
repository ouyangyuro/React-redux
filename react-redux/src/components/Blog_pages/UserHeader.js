import React from 'react';

//====== below redux staff start ======//
import { useSelector } from 'react-redux';
//====== above redux staff end ======//

function UserHeader(props) {
  //取出State比對,find() 回傳第一個滿足所提供之測試函式的元素值,沒有則回傳undefined
  const user = useSelector((state) =>
    state.users.find((user) => user.id === props.userId)
  );
  if (!user) {
    return null;
  }
  // console.log('user state:', user); //for check

  return (
    <>
      <p className="font-bold">{user.name}</p>
    </>
  );
}

export default UserHeader;
