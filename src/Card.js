import React from "react";
import "./Card.css";
import { AiOutlineDownload } from "react-icons/ai";

function Card({ details }) {
  return (
    <>
      <div className="cardDetails">
        {details.map((data) => {
          return (
            <div className="card" key={data.id}>
              <img className="card_img" src={data.url} />
              <div className="card_attri">
                <h3 className="card_name">{data.name}</h3>
                <a href={data.url} download>
                  <AiOutlineDownload className="card_down" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
