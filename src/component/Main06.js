//import { useState } from "react";
import styles from "./Main04.module.css";
//import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1. install 설치  npm install @reduxjs/toolkit
//  오류 발생 시 : ** npm install react-router-dom --save
//                      npm install redux react-redux

// 2. slice를 만들자 (slice란 하나의 store가 아니라 기능 단위의 작은 store를 말한다.)
// 나중에 작은 store(slice)를 합쳐서 Redux가 요구하는 큰 store로 Toolkit이 알아서 만들어 준다.
// slice를 만드는 import를 하자

const plusSlice = createSlice({
  // 이름 = 보통 변수와 같은 이름
  name : 'plusSlice' , 
  // 초기값
  initialState : {value:100} ,
  reducers :{
    add : (state , action)=>{
      // state.value = state.value + action.step;
      state.value = state.value + action.payload;
    },
    sub : (state , action)=>{
      // state.value = state.value - action.step;
      state.value = state.value - action.payload;
    }
  }

});

// 3. store 만들기 : 필수적으로 reducer가 들어가야 한다
const store = configureStore({
  reducer:{
    add : plusSlice.reducer
  }
});


export default function Main06() {
  return (
    <div id={styles.container}>
      <h1>Root</h1>
      <div id={styles.grid}>
       <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  )
}

function Left1(props) {
  return (
    <div>
      <h1>Left1 </h1>
      <Left2 />
    </div>
  )
}

function Left2(props) {
  return (
    <div>
      <h1>Left2 </h1>
      <Left3 />
    </div>
  )
}
// 4. useSelector
function Left3(props) {
  const cnt = useSelector((state) => state.add.value);

  return (
    <div>
      <h1>Left3 : {cnt} </h1>
    </div>
  )
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  )
}

function Right2(props) {
  return (
    <div>
      <h2>Right2</h2>
      <Right3 />
    </div>
  )
}


// 5. 이벤트 : const dispatch = useDispatch();
//              dispatch(slice이름.actions.add(2));
function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Right3</h2>
      <input type="button" value='+' onClick={() => {
        // plusSlice에서 확인 가능
        // dispatch({ type: 'plusSlice/add' , step:2});
        // 인자 2는 plusSlice에서는 무조건 action.payload 라고 지정된다.
        dispatch(plusSlice.actions.add(2));
      }} />

<input type="button" value='-' onClick={() => {
        // dispatch({ type: 'plusSlice/sub' , step:5 });
        dispatch(plusSlice.actions.sub(5));
      }} />
    </div>
  )
}