import { Card } from "./Card/Card";
import "./RecommendStyles.css";

export const Recommend = () => {
  return (
    <section className="container-fluid recommend_container">
      <h2>Recommend</h2>
      <div className="recommend_content">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};
