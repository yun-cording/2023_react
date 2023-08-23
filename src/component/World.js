// 각 컴포넌트에 사용할 css를 만들어라
import styles from"./World.module.css";

export default function World() {
  return(
    // 컴포넌트는 하나의 태그바께 사용못하기때문에 여러 태그를 사용하려면 가장 큰범위의 <>태그 or <div>태그로 감싸면 여러태그 사용가능 하다.
    <>
      <h2 className={styles.fg}>World</h2>
        <div className={styles.box}></div>
    </>
      )
}