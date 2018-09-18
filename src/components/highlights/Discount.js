import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 25);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before October 1st</h3>
              <p>
                Phasellus sed dui eros. Suspendisse aliquam ut nisi gravida
                sollicitudin. Nam et dolor imperdiet, aliquet ex auctor,
                porttitor risus. Donec ac faucibus mauris. Integer et dolor
                nisl. In et rhoncus felis. Etiam non neque facilisis nulla
                aliquam sollicitudin. Praesent nunc ipsum, volutpat a sapien
                nec, maximus semper lacus.
              </p>
              <div>
                <MyButton
                  bck="#ffa800"
                  color="#ffffff"
                  href="https://www.google.com"
                  text="Purchase tickets"
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
