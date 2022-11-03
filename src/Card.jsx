import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card_changer">
          <div className="card">
            <a href={props.link}>
              <img src={props.imgsrc} alt="mypic" className="Card__img" />
            </a>

            <div className="card_con">
              <div className="card__info">
                <span className="card__category">{props.title}</span>

                <h3 className="card__title">{props.sname}</h3>
                <a href={props.link} target="_blank">
                  <button className="btn">Watch Now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
