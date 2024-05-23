import React from "react";
import { Card } from "react-bootstrap";
import { ChatText, Wechat } from "react-bootstrap-icons";
import "./style.css";

function NewsCard({
  image,
  topicText,
  news,
  user,
  commentsCount,
  date,
  alt,
  backgroundColor,
  fontColor,
  dateBgColor,
  iconColor,
}) {
  const cardStyle = {
    backgroundColor: backgroundColor,
    color: fontColor,
  };

  return (
    <Card
      className="d-flex mx-2 sliderCardContainer shadow mb-4 newsCardContainer"
      style={cardStyle}
    >
      <div
        className="topLeftDateBox"
        style={{
          backgroundColor: dateBgColor,
        }}
      >
        <span className="dateText">{date}</span>
        <span className="monthText">May</span>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <Card.Img
            variant="top"
            src={image}
            className="sliderImageNews"
            alt={alt}
          />
        </div>

        <div className="col-md-5 sliderCardTextContainer p-4">
          <Card.Text>
            <p className="sliderItemHeading mb-1">{topicText}</p>
            <span
              className="sliderItemBody"
              style={{ color: fontColor, padding: 0 }}
            >
              <div>
                {user} <Wechat className="mx-1" style={{ color: iconColor }} />{" "}
                {commentsCount}
              </div>
            </span>
            <p className="newsBody">{news}</p>
          </Card.Text>
        </div>
      </div>
    </Card>
  );
}

export default NewsCard;
