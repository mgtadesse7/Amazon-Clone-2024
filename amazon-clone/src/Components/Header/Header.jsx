import React, {useContext} from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {

  const [{basket}, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>

            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin size={20} />
              </span>
              <div>
                <p>Delivered to</p>
                <span>HOUSTON</span>
              </div>
            </div>
          </div>
          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14655.png"
                alt="usa flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            {/* three components */}
            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
