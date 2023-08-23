// javascript 에서 변수 설정 : var(변수) >>>>> let(변수) >>>>const
//ES6 이후, 이를 보완하기 위해 추가 된 변수 선언 방식이 let 과 const이다.
//  let : 일반적인 변수 , const: 상수
// jsx는 하나의 태그만 만들 수 있음
import { useState } from "react";

// 속성을 받아 준다.
// props : object
export default function Hello(props) {
    // props는 강제로 변경할 수 없다. 변경 불가
    //props.age = 150; 불가능
    
    const[name, setName]  = useState('hong');


    // useState를 이용해서 변경가능
    const[age,setAge] = useState(props.age);

    const msg = props.age > 19 ? "성년" : "미성년" ;
    
    function changeName() {
        const newName = name === 'hong' ? 'kim' : 'hong';
        setName(newName);
        setAge(age+5);
    }
    return(
        <div>
            <h1>{name}({age}) : {msg}</h1>
            <button onClick={changeName}>changeName</button>
        </div>
    )
}

