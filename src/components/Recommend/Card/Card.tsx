import cheese_lovers from "../../../assets/cheese-lovers.png";
import "./CardStyle.css";

export const Card = () => {
  return (
    <div className="container-fluid card_container">
      <div className="item_container">
        <img
          src={cheese_lovers}
          alt="Cheese Lovers"
          className="img-fluid pizza_img"
        />
        <h3>Cheese Lovers</h3>
        <p className="description">
          Combination of Alfredo sauce and two cheeses – Romano, and Parmesan.
        </p>
        <p className="price">$ 20</p>
        <select name="size" id="size" className="size">
          <option value="regular">Regular</option>
          <option value="big">Big</option>
          <option value="small">Small</option>
        </select>
        <button className="btn btn_add btn-sm" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};
