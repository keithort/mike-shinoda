import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div className="location_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1713.2218891335835!2d-81.52263245346046!3d28.37100913688142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7f8692559807%3A0x14a5909bee865325!2sHouse+of+Blues+Orlando!5e0!3m2!1sen!2sus!4v1537302249349"
          width="100%"
          height="500px"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
        <div className="location_tag">
          <div>Location</div>
        </div>
      </div>
    );
  }
}

export default Location;
