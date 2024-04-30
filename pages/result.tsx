import styles from "../styles/Result.module.css";
import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();

  if(typeof router.query.total === "undefined" || typeof router.query.rightAnswers === "undefined") {
    return <div>Missing query parameters</div>;
  }

  const total = +router.query.total
  const rightAnswers = +router.query.rightAnswers
  const percent = Math.round((rightAnswers / total) * 100)
  return (
    <div className={styles.result}>
      <h1>Resultado</h1>
      <span>{total}</span>
      <span>{rightAnswers}</span>
      <span>{`${percent}%`}</span>
    </div>
  );
}
