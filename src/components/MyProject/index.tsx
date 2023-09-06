import { FC } from "react";
import styles from "./index.module.scss";

const MyProject: FC = () => {
  return (
    <div id="project" className={styles.project}>
      <div className={styles.title}>
        <h2>个人作品</h2>
      </div>
      <h3>暂无作品...</h3>
    </div>
  );
};

export default MyProject;
