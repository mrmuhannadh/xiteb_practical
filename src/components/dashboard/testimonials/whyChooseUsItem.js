import React, { useState } from "react";
import { DashSquareFill, PlusSquareFill } from "react-bootstrap-icons";
import "./style.css";

function WhyChooseUs({ topic, description }) {
  const [show, setShow] = useState(false);

  function setShowDesc() {
    setShow(!show);
  }

  return (
    <div className="">
      <div className="customContainer">
        <div className="d-flex justify-content-between align-items-center">
          <span>{topic}</span>
          <div>
            {show === true ? (
              <DashSquareFill onClick={setShowDesc} />
            ) : (
              <PlusSquareFill onClick={setShowDesc} />
            )}
          </div>
        </div>
        {show ? <div>{description}</div> : <></>}
      </div>
      <hr style={{ margin: 0 }} />
    </div>
  );
}

export default WhyChooseUs;
