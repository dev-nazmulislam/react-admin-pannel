import "./charts.css";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const TopProduct = () => {
  return (
    <div className="top-product">
      <div className="chart-title">
        <h1>Top Products</h1>
        <AiOutlineQuestionCircle />
      </div>
      <div className="product-items">
        <div className="item">
          <div className="item-left">
            <div className="number">
              <h1>#1</h1>
            </div>
            <div className="product">
              <h2 className="product-title">Polo blue T-Shirt</h2>
              <h1 className="product-price">$25.5</h1>
            </div>
          </div>
          <div className="user">2.5k</div>
        </div>
        <div className="item">
          <div className="item-left">
            <div className="number">
              <h1>#2</h1>
            </div>
            <div className="product">
              <h2 className="product-title">Polo blue T-Shirt</h2>
              <h1 className="product-price">$25.5</h1>
            </div>
          </div>
          <div className="user">2.5k</div>
        </div>
        <div className="item">
          <div className="item-left">
            <div className="number">
              <h1>#3</h1>
            </div>
            <div className="product">
              <h2 className="product-title">Polo blue T-Shirt</h2>
              <h1 className="product-price">$25.5</h1>
            </div>
          </div>
          <div className="user">2.5k</div>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
