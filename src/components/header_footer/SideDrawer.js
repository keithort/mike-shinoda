import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const Links = ["Countdown", "Venue", "Highlights", "Pricing", "Location"];

const SideDrawer = props => {
  const scrollToBlock = block => {
    scroller.scrollTo(block, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose();
  };

  return (
    <Drawer anchor="right" open={props.open} onClose={() => props.onClose()}>
      <List component="nav">
        {Links.map((link, index) => (
          <ListItem button onClick={() => scrollToBlock(link)} key={index}>
            {link}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
