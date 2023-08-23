import { keyboard } from "@testing-library/user-event/dist/keyboard";
import dumy from "../db/data.json";
export default function DayList() {
  //console.log(dumy);
  // json 같은 반복 처리할때는 주로 map를 사용
  return(
    <>
    <ul className="list_day">
      {dumy.days.map(k => (
        <li key={k.id}> Day{k.day}</li>
      ))};

    </ul>
    </>
  );
}