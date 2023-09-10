import { FC } from "react";
import styles from "./index.module.scss";
import AsideContent from "./AsideContent";
import ArticleContent from "./ArticleContent";
import { Col, Row } from "antd";

const MainContent: FC = () => {
  return (
    <div className={styles.mainContent}>
      <Row>
        <Col span={6}>
          <AsideContent />
        </Col>
        <Col span={18}>
          <ArticleContent />
        </Col>
      </Row>
    </div>
  );
};

export default MainContent;
