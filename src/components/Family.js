import familyImage from "../images/FamilyImage.jpg";

import "../css/Family.css";

const Family = () => {
  return (
    <>
      <h1 className="Family-title">Family</h1>

      <div>
        <img src={familyImage} alt="Family Image" className="familyImage"></img>
      </div>
      <div className="family-message-container">
        <div className="family-message-title">
          <h2>Happy kids, happy parents</h2>
        </div>
        <div>
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
    </>
  );
};

export default Family;
