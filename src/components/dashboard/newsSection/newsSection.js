import React from "react";
import "./style.css";
import NewsCard from "./newsCard";
import imageOne from "../../../assets/news/JPG/1.jpg";
import imageTwo from "../../../assets/news/JPG/ship.jpg";
import imageThree from "../../../assets/news/JPG/train.jpeg";
import imageFour from "../../../assets/news/WEBP/flight.webp";

function NewsSection() {
  const newsSet = [
    {
      image: imageOne,
      topic: "News 1",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      user: "admin",
      comments: "15",
      alt: "imageone",
      background: "rgb(0,192,228)",
      fontColor: "#fff",
      date: "26",
      dateBg: "rgb(0,192,228)",
    },
    {
      image: imageTwo,
      topic: "News 2",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      user: "admin",
      comments: "13",
      alt: "imagetwo",
      background: "#fff",
      fontColor: "#000",
      date: "25",
      dateBg: "rgb(63,78,88)",
    },
    {
      image: imageThree,
      topic: "News 3",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      user: "admin",
      comments: "10",
      alt: "imagethree",
      background: "#fff",
      fontColor: "#000",
      date: "25",
      dateBg: "rgb(63,78,88)",
    },
    {
      image: imageFour,
      topic: "News 2",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      user: "user",
      comments: "11",
      alt: "imagef",
      background: "#fff",
      fontColor: "#000",
      date: "25",
      dateBg: "rgb(63,78,88)",
    },
  ];
  return (
    <div className="container">
      <div>
        <h3 className="heading">LATEST NEWS</h3>
        <span className="subTopic">INTEGER CONGUE ELIT</span>
      </div>
      <div className="newsSection">
        <div className="row">
          {newsSet.map((news) => {
            return (
              <div className="col-md-6">
                <NewsCard
                  image={news.image}
                  topicText={news.topicText}
                  news={news.body}
                  user={news.user}
                  commentsCount={news.comments}
                  date={news.date}
                  alt={news.alt}
                  backgroundColor={news.background}
                  fontColor={news.fontColor}
                  dateBgColor={news.dateBg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
