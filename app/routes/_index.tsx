import type { MetaFunction } from "@remix-run/node";
import styles from "./index.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "らむらむRemix" },
    { name: "description", content: "らむらむRemix入門編" },
  ];
};

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.heading}>Welcome to Remix</h1>
      </div>
    </div>
  );
}
