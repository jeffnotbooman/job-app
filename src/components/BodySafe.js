import React, { useState } from "react";
import array from "../data";
console.log(array);
export default function Lists() {
  const [data, setData] = useState(array);
  const [filter, setFilter] = useState([]);
  return (
    <div className="container">
      {filter.length > 0 && (
        <div className="filter-box">
          {[...new Set(filter)].map((l, index) => {
            return (
              <button className="filter-btn" key={index}>
                {l}
              </button>
            );
          })}
          <button
            className="clear-btn"
            onClick={() => {
              setData(array);
              setFilter([]);
            }}
          >
            Clear
          </button>
        </div>
      )}
      <div className="lists-container">
        {data.map((item, index) => {
          return (
            <div className={`list ${item.featured && "line"}`} key={index}>
              <div className="img">
                <img src={item.logo} alt="logo" />
              </div>
              <div className="other">
                <div className="a">
                  <h5>{item.company}</h5>
                  {item.new && <NewBtn />}
                  {item.featured && <FeaturedBtn />}
                </div>
                <h3>{item.position}</h3>
                <p>
                  <span>{item.postedAt}</span>
                  <Stop />
                  <span>{item.contract}</span>
                  <Stop />
                  <span>{item.location}</span>
                </p>
              </div>
              <div className="filter">
                <button
                  className="filter-btn"
                  onClick={() => {
                    setData(data.filter((a) => a.role === item.role));
                    setFilter([...filter, item.role]);
                    console.log(filter);
                  }}
                >
                  {item.role}
                </button>
                <button
                  className="filter-btn"
                  onClick={() => {
                    setData(data.filter((a) => a.level === item.level));
                    console.log(filter);
                    setFilter([...filter, item.level]);
                  }}
                >
                  {item.level}
                </button>
                {item.languages.map((e, index) => {
                  return (
                    <button
                      className="filter-btn"
                      key={index}
                      onClick={() => {
                        setData(data.filter((a) => a.languages.includes(e)));
                        console.log(filter);
                        setFilter([...filter, e]);
                      }}
                    >
                      {e}
                    </button>
                  );
                })}
                {item.tools &&
                  item.tools.map((e, index) => {
                    return (
                      <button
                        className="filter-btn"
                        key={index}
                        onClick={() => {
                          setData(data.filter((a) => a.tools.includes(e)));
                          console.log(filter);
                          setFilter([...filter, e]);
                        }}
                      >
                        {e}
                      </button>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const NewBtn = () => {
  return <button className="btn new-btn">new!</button>;
};
const FeaturedBtn = () => {
  return <button className="btn f-btn">featured</button>;
};
const Stop = () => {
  return <span className="bold">.</span>;
};
