import { navigationList } from "../data/navigationData.js";
import { Search, ShoppingCart, CircleUser, Circle } from "lucide-react";
const Header = () => {
  return (
    <header>
      <section className="firstOrderDiscountOffer text-center blackBackground whiteP1">
        Get 25% OFF on your first order.
      </section>
      <nav className="navigationArea space-around padding06">
        <div className="logoArea">
          <span className="h3Style">ECommerce</span>
        </div>
        <div className="navigationList">
          <ul>
            {navigationList.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className="thirdBox flex">
          <div className="searchArea">
            <input
              type="text"
              className="searchBox borderRadius10"
              placeholder="Search products"
            ></input>
            <Search className="searchIcon icon" />
          </div>
          <div className="cartArea">
            <ShoppingCart className="cartIcon icon"/>
            <CircleUser className="icon"/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
