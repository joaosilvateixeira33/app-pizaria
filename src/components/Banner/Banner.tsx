import React from "react";
import "./BannerStyles.css";

export const Banner: React.FC = () => {
  return (
    <div className="container-fluid banner_style">
      <div className="banner_content">
        <h2>Friday pizza!</h2>
        <p>Time to enjoy our delicious pizza.</p>
        <button className="btn btn_order btn-sm" type="button">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};
