import Navbar from "./Navbar";
import Footer from "./Footer";
import familyImage from "../images/FamilyImage.jpg";
import KidsMealChicken from "../images/KidsMealGrilledChicken.jpg";
import KidsMealYogurt from "../images/KidsMealYogurt.jpg";
import "../css/Family.css";

const Family = () => {
  return (
    <>
      <Navbar />
      <h1 className="Family-title">Family</h1>

      <div>
        <img src={familyImage} alt="Family" className="familyImage"></img>
      </div>
      <div className="family-message-container">
        <div className="family-message-title">
          <h2>Happy kids, happy parents</h2>
        </div>
        <div className="family-message-content">
          <h3>You want the best for your family. So do we.</h3>
          <p>
            Choose from great Happy Meal® options like apple slices, 1% milk,
            and our tender and juicy Chicken McNuggets® made without any
            artificial colours, flavours, or preservatives.
          </p>
          <p>
            Every time you enjoy a Happy Meal, you’re helping over 30,000
            families each year stay close to their sick child at Ronald McDonald
            Houses and Ronald McDonald Family Rooms across Canada.
          </p>
          <button className="family-message-button">Learn about RMHC</button>
        </div>
      </div>

      <div className="family-standards-message-container">
        <div className="family-standards-inner">
          <img src={KidsMealChicken} alt="Kids Meal Chicken" />
          <div>
            <h4>Grilled chicken freshly prepared</h4>
            <p>
              You’ll be happy to know, our Happy Meal® selection includes 100%
              Canadian raised seasoned chicken with no artificial colours,
              flavours or preservatives. Give it a try with our Grilled Chicken
              Snack Wrap today.
            </p>
          </div>
        </div>
        <div className="family-standards-inner">
          <img src={KidsMealYogurt} alt="Kids Meal Yogurt" />
          <div>
            <h4>Includes yogurt!</h4>
            <p>
              Every Happy Meal includes yogurt, and your choice of entrée, side,
              drink, and book or toy.
            </p>
          </div>
        </div>
      </div>

      <div className="family-safety-message-container">
        <div>
          <h2>Top Safety</h2>
        </div>
        <div>
          <h3>
            Nothing is more important to us than the safety and well-being of
            our guests.
          </h3>
          <ul className="family-safety-right-list">
            <li>
              All Happy Meal toys are made exclusively for McDonald’s by
              McDonald’s own safety-approved suppliers. They’re not
              “off-the-shelf” toys made by anyone else.
            </li>
            <li>
              We have been rigorously testing and re-testing our Happy Meal toys
              for decades.
            </li>
            <li>
              Happy Meal toys are tested continuously. They’re backed by a
              proactive safety program that starts with the design and continues
              throughout the entire process, long before a Happy Meal toy makes
              it to the production line.
            </li>
            <li>
              When it comes to toy safety, we take nothing for granted and
              continue to watch every step of the process.
            </li>
            <li>
              McDonald’s suppliers do not use lead-based paint on Happy Meal
              toys. This safety step has been a McDonald’s mandate for more than
              20 years.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Family;
