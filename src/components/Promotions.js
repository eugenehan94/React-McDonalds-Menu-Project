import Navbar from "./Navbar";
import Sundae from "../images/SundaeDrinkSummerTime.jpg";
import RefreshingSip from "../images/RefreshingSipOfSummer.jpg";
// import McMuffin from "../images/YourFavouriteMcMuffin.jpg";
// import BicMac from "../images/BigMacJustGotBigger.jpg";
import "../css/Promotions.css";
const Promotions = () => {
  return (
    <>
      <Navbar />
      <h1 className="Promotions-title">Deals & Promotions</h1>
      <div className="deals-outer-container">
        {/* Top <div> is the whole page */}
        <div className="deals-inner-container">
          <div className="promo-container">
            <div className="image-container">
              <img src={Sundae} alt="summertime" className="image"></img>
            </div>
            <div className="promo-content">
              <h2>Add chill time to summertime</h2>
              <p>
                Treat the family to the sweet taste of summer with soft serve
                cones, sundaes, and snack size milkshakes.
              </p>
              <button>Download App</button>
            </div>
          </div>

          <div className="promo-container">
            <div className="image-container">
              <img src={RefreshingSip} alt="drinks" className="image"></img>
            </div>
            <div className="promo-content">
              <h2>Take a refreshing sip of summer</h2>
              <p>
                We’re serving up all your refreshing favourites all season long.
                Available in medium for only $1 or $2 + tax.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotions;
