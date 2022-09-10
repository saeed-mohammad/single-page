import React from "react";
import "./style/Best.scss";
import Apt1 from "../asset/apt1.jpeg";
import Apt2 from "../asset/apt2.jpeg";
import Apt3 from "../asset/apt3.jpeg";

const Best = () => {
  return (
    <section className="Best">
      <h1>Find the best rated properties</h1>
      <div>
        <p>
          <span className="bold">All</span>
        </p>
        <p>Commertial</p>
        <p>Residential</p>
        <p>Agricultural</p>
      </div>
      <div className="assets">
        <img src={Apt1} alt="" />
        <img src={Apt2} alt="" />
        <img src={Apt3} alt="" />
      </div>
      <button>View All</button>
    </section>
  );
};

export default Best;
