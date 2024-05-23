import React from "react";
import { ArrowUp } from "react-bootstrap-icons";
import ScrollToTop from "react-scroll-up";

function MoveUpButton() {
  return (
    <ScrollToTop showUnder={120} duration={500}>
      <div className="moveUpButton">
        <ArrowUp size={20} />
      </div>
    </ScrollToTop>
  );
}

export default MoveUpButton;
