import {useState} from "react";

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
      </div>
    )
}