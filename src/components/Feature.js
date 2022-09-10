import React from "react";
import "./style/Feature.scss";
import House1 from "../asset/house1.jpg";
import Bed1 from "../asset/bed1.jpg";
import Bed2 from "../asset/bed2.jpg";
import Kitchen from "../asset/kitchen.jpg";
import Bathroom from "../asset/bath1.jpg";

import House2 from "../asset/house2.jpg";
import Bed3 from "../asset/bed3.jpg";
import Bed4 from "../asset/bed4.jpg";
import Livingroom from "../asset/living-room.jpg";
import Bathroom2 from "../asset/bath2.jpg";

const Feature = () => {
  return (
    <section className="feature">
      <h1 className="text">top featured listing</h1>
      <p className="text">selected listings by city, state & zip based on views.</p>

      <div className="content">
        <img src={House1} alt="" className="span-3 image-grid-row-2" />
        <img src={Bed1} alt="" />
        <img src={Bed2} alt="" />
        <img src={Kitchen} alt="" />
        <img src={Bathroom} alt="" />

        <div className="span-3 img-details">
          <div className="top">
            <p className="bold">124 Acme st. Dallas, TX</p>
            <p>House for Sale</p>
            <p className="price">$2,677,000</p>
          </div>

          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedroom:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathroom:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>8,137</p>
              </div>
              <div className="info">
                <p className="bold">Est:</p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-detail">
          <p>
            A beautiful modern day home in the city with a full-size pool. Spacious and
            luxurious home located in Texas. Including media room, workout facility, and
            built-in sauna.
          </p>
          <button>View Listing</button>
        </div>
      </div>

      {/* sectiom -2 */}

      <div className="content">
        <img src={Bed3} alt="" className="order-2" />
        <img src={Bed4} alt="" className="order-3" />

        <img src={House2} alt="" className="span-3 image-grid-row-2 order-1 " />

        <img src={Livingroom} alt="" className="order-4" />
        <img src={Bathroom2} alt="" className="order-5" />

        <div className="span-2 right-img-detail order-6">
          <p>
            A beautiful modern day home in the city with a full-size pool. Spacious and
            luxurious home located in Texas. Including media room, workout facility, and
            built-in sauna.
          </p>
          <button>View Listing</button>
        </div>

        <div className="span-3 img-details">
          <div className="top">
            <p className="bold">124 Acme st. Dallas, TX</p>
            <p>House for Sale</p>
            <p className="price">$2,677,000</p>
          </div>

          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedroom:</p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathroom:</p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>8,137</p>
              </div>
              <div className="info">
                <p className="bold">Est:</p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
