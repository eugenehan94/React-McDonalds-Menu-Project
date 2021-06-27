import Sundae from "../images/SundaeDrinkSummerTime.jpg";
import RefreshingSip from "../images/RefreshingSipOfSummer.jpg";
const Promotions = () => {
  return (
    <>
      <h1>Deals & Promotion</h1>
      <div>
        {/* Top <div> is the whole page */}
        <div className="deals-inner-container">
          <div>
            <img src={Sundae} alt="summertime"></img>
            <div>
              <h3>Add chill time to summertime</h3>
              <p>
                Treat the family to the sweet taste of summer with soft serve
                cones, sundaes, and snack size milkshakes.
              </p>
              <button>Download App</button>
            </div>
          </div>
          <div>
            <img src={RefreshingSip} alt="drinks"></img>
            <div>
              <h3>Take a refreshing sip of summer</h3>
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
