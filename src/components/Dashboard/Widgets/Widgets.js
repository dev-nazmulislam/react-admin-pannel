import React from "react";
import { cardsData } from "../../../Data/Data";
import Widget from "../widget/Widget";
import "./widgets.css";
const Widgets = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer">
            <Widget
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              series={card.series}
              prograss={card.prograss}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Widgets;
