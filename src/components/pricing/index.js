import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import MyButton from "../utils/MyButton";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    categories: ["General", "LPU", "VIP"],
    desc: [
      "Suspendisse aliquam ut nisi gravida sollicitudin. Nam et dolor imperdiet, aliquet ex auctor, porttitor risus. Donec ac faucibus mauris. Integer et dolor nisl.",
      "In et rhoncus felis. Etiam non neque facilisis nulla aliquam sollicitudin. Praesent nunc ipsum, volutpat a sapien nec, maximus semper lacus.",
      "Sed non turpis sit amet ex consectetur pharetra vitae vitae ipsum. Aenean hendrerit, massa ac mattis lobortis, odio risus finibus nisl, eu rutrum nulla nunc id lectus."
    ],
    linkTo: [
      "https://www.google.com",
      "https://www.google.com",
      "https://www.google.com"
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((pricing, index) => (
      <Zoom delay={this.state.delay[index]} key={index}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${pricing}</span>
              <span>{this.state.categories[index]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[index]}</div>
            <div className="pricing_buttons">
              <MyButton
                href={this.state.linkTo[index]}
                bck="#ffa800"
                color="#ffffff"
                text="Purchase Tickets"
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
