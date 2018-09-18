import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">
          House of Blues, Orlando
        </div>
        <div className="footer_copyright">
          House of Blues 2018. All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;