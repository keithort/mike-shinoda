import React from "react";
import Button from "@material-ui/core/Button";

import TicketIcon from "../../resources/images/icons/ticket.png";

const MyButton = props => {
  return (
    <Button
      href={props.href}
      variant="contained"
      size="small"
      style={{ backgroundColor: props.bck, color: props.color }}
    >
      <img src={TicketIcon} className="iconImage" alt="Ticket" />
      {props.text}
    </Button>
  );
};

export default MyButton;
