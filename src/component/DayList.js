import dumy from "../db/data.json";
import {Link} from "react-router-dom";

export default function DayList() {
  //console.log(dumy);
  // json 같은 반복 처리할때는 주로 map를 사용
  // react-route => Link
  return(
    <ul className="list_day">
      {dumy.days.map(k => (
        <li key={k.id}><Link to={`/day/${k.day}`} >Day{k.day}</Link></li>
      ))};
    </ul>
  );
}