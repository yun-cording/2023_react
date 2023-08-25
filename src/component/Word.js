import { useState } from "react";

// 객체이기 때문에 props의 사용되는 이름 그대로 사용
export default function Word({word}) {
  // 보였다가 안보였다가 하기 위해서 
  // useState
  // isShow 상태값을 만들어 주고 , props로 word를 받아와
  // isShow가 true 일때만 보이게 하자

  
  const[isShow , setIsShow] = useState(false);
  
  function toggleShow() {
    setIsShow(! isShow)
  }

  return(
    <>
       <tr>
        <td><input type="checkbox" /></td>
         <td>{word.eng}</td>
         {/* 둘다 true일때만 보인다. */}
         <td>{isShow && word.kor}</td>
         <td>
          <button onClick={toggleShow}>뜻 {isShow? '숨기기' : '보기'}</button>
          <button>삭제</button>
         </td>
       </tr>

    </>

  );
}