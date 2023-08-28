import {useState , useReducer} from "react";

export default function Main03() {

const[count, setCount] = useState(0);


function down() {
  setCount(count -1);
}
function reset() {
  setCount(0);
}
function up() {
  setCount(count+1) ;
}
// useState 방식
//const[cnt , setCnt] = useState(0);

// useReducer 방식
function cntReducer(oldCnt, action) {
  if(action === 'DOWN'){
    return oldCnt -1 ;
  }else if(action === 'RESET'){
    return 0;
  }else if(action === 'UP'){
    return oldCnt +1 ;
  }else if(action.type === 'DOWN3'){
    return oldCnt -action.number ;
  }else if(action.type === 'RESET3'){
    return 0 ;
  }else if(action.type === 'UP3'){
    return oldCnt + action.number ;
  }
}

const[cnt , cntDispatch] = useReducer(cntReducer , 0); // 초기값은 0 설정 cntReducer가 밑에 
// cntDispatch의 값을받고 ex)DOWN 그 값이 위에 cntReducer에 action값으로 들어간다. ex) action ==='DOWN'

function down2() {
  cntDispatch('DOWN');
}
function reset2() {
  cntDispatch('RESET');
}
function up2() {
  cntDispatch('UP');
}

// function numReducer(oldNum, action) {
//   if(action.type === 'DOWN'){
//     return oldNum -action.number ;
//   }else if(action.type === 'RESET'){
//     return 0;
//   }else if(action.type === 'UP'){
//     return oldNum + action.number ;
//   }
// }

const[number , setNumber] = useState(1);
//const[num , numDispatch] = useReducer(numReducer , 0);
const[num , numDispatch] = useReducer(cntReducer , 0);

function down3() {
  // 여러 정보를 보내기 위해서 객체로 만들자
  numDispatch({type:'DOWN3' , number:number});
}
function reset3() {
  numDispatch({type:'RESET3' , number:number});
}
function up3() {
  numDispatch({type:'UP3' , number:number});
}

function changeNumber(e) {
  setNumber(Number(e.target.value));
}

    return(
      <div>
        <div>
        <h2>useState</h2>
        <input type="button" value="-" onClick={down} />
        <input type="button" value="초기화" onClick={reset} />
        <input type="button" value="+" onClick={up} />
        </div>
         {/* 해당 count는 버턴을 눌렀을 때 변경되야 하므로 useState 사용 */}
        <div><h2 style={{margin:"20px"}}>{count}</h2></div>

        <div>
        <h2>useReducer</h2>
        <input type="button" value="-" onClick={down2} />
        <input type="button" value="초기화" onClick={reset2} />
        <input type="button" value="+" onClick={up2} />
        </div>
        <div><h2 style={{margin:"20px"}}>{cnt}</h2></div>

        <div>
        <h2>useReducer2</h2>
        <input type="button" value="-" onClick={down3} />
        <input type="button" value="초기화" onClick={reset3} />
        <input type="button" value="+" onClick={up3} />
        <input type="text" value={number} onChange={changeNumber} />
        </div>
        <div><h2 style={{margin:"20px"}}>{num}</h2></div>

      </div>
    )
}