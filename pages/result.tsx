import Statistic from "@/components/Statistic";
import styles from "../styles/Result.module.css";
import { useRouter } from "next/router";
import Button from "@/components/Button";

export default function Result() {
  const router = useRouter();

  if (
    typeof router.query.total === "undefined" ||
    typeof router.query.rightAnswers === "undefined"
  ) {
    return <div>Missing query parameters</div>;
  }

  const total = +router.query.total;
  const rightAnswers = +router.query.rightAnswers;
  const percent = Math.round((rightAnswers / total) * 100);
  return (
    <div className={styles.result}>
      <h1>Resultado</h1>
      <div style={{ display: "flex" }}>
        <Statistic text="Perguntas" value={total} />
        <Statistic text="Certas" value={rightAnswers} backgroundColor="#9cd2a4" />
        <Statistic text="Percentual" value={`${percent}%`} backgroundColor="#DE6A33" />
      </div>
      <Button href="/" text="Tentar Novamente" />
    </div>
  );
}
