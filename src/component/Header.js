import { Link} from "react-router-dom";

export default function Header() {
  return(
    <div className="header">
      <h1>토익 영단어 (고급)</h1>
      <div className="menu">
        <a href="/" class="link">단어 추가</a>
        <a href="/" class="link">Day 추가</a>
      </div>
      </div>
  );
}