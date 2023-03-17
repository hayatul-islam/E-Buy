import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <div className="text-center py-3 text-[12px] bg-[#233a95] text-white">
        Due to the <span className="font-bold">COVID 19</span> epidemic, orders
        may be processed with a slight delay
      </div>
      <div className="flex justify-between text-[12px] text-[#3e445a] py-2 border-b">
        <nav className="flex gap-x-4">
          <Link className="hover:text-[#6EC1E4]" to="about-us">
            About Us
          </Link>
          <Link className="hover:text-[#6EC1E4]" to="my-account">
            My Account
          </Link>
          <Link className="hover:text-[#6EC1E4]" to="wishlist">
            Wishlist
          </Link>
          <Link className="hover:text-[#6EC1E4]" to="order-tracking">
            Order Tracking
          </Link>
        </nav>
        <div>100% Secure delivery without contacting the courier</div>
        <div>
          <span>Need help? Call Us:</span>
          <span className="text-[#6EC1E4] font-bold">+ 0020 500</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
