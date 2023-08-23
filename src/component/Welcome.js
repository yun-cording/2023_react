import styles from"./Welcome.module.css"
const Welcome = () => { // 람다식 방식 function 생략 가능

  return(
    <div>
    <h2 className={styles.rg}>Welcome</h2>
    <div className={styles.fg}></div>
    </div>
  )
}

export default Welcome;