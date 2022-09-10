import React, { useState } from "react";
import "./style/Hero.scss";
import { AiOutlineSearch } from "react-icons/ai";
import Data from "./Data.json";

const Hero = () => {
  const [Value, setValue] = useState("");
  const Change = (event) => {
    setValue(event.target.value);
  };
  const Search = (search) => {
    setValue(search);
    console.log("search", search);
  };
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>find the perfect place</h1>
        <p>
          earch the largest selection of luxery high-rise apartments, multi-family homes,
          and luxery homes.
        </p>

        <div className="search">
          <input
            type="text"
            name=""
            placeholder="Enter Keywords..."
            value={Value}
            onChange={Change}
          />

          <div className="radio">
            <input type="radio" value="buy" name="r" checked />
            <label htmlFor="">Buy</label>
            <input type="radio" value="rent" name="r" />
            <label htmlFor="">Rent</label>
            <button onClick={() => Search(Value)}>
              <AiOutlineSearch className="icon" />
            </button>
          </div>
          <div className="dropdown">
            {Data.filter((item) => {
              if (Value == "") {
                return "";
              } else if (item.full_name.toLowerCase().includes(Value.toLowerCase())) {
                return item;
              }
            })
              .slice(0, 5)
              .map((item, ind) => {
                return (
                  <div className="dropdown-row" key={ind}>
                    {item.full_name}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
