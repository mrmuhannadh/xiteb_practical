import React from "react";
import {
  ChevronRight,
  Facebook,
  GeoAlt,
  Instagram,
  Telephone,
  Twitter,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";
import imageOne from "../../../assets/slider/JPG/slider1.jpg";
import imageTwo from "../../../assets/slider/JPG/slider2.jpg";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="container">
        <div className="row topRow">
          <div className="col-md-6">
            <h2>Weekly Newsletter</h2>
            <span>
              There are many vaialations of pessamger osdsd fds available
            </span>
          </div>
          <div className="col-md-6 d-flex">
            <input
              type="text"
              className="footerTextBox"
              placeholder="Enter Your Mail"
            />
            <div className="customButtonCustomClass md-3">SUBSCRIBE</div>
          </div>
        </div>
        <div className="secRow row">
          <div className="col-md">
            <span className="footerTopic">About Us</span>
            <hr className="underlineHR" />
            <div className="footerContent">
              <p>
                Add dialogs to your site for lightboxes, user notifications, or
                completely custom content.
              </p>
              <p>
                <Telephone /> | (+94) 11 434 7575
              </p>
              <p>
                <GeoAlt /> | 42, Lily Auto, Colombo 00600
              </p>
            </div>
          </div>
          <div className="col-md">
            <div className="col-md">
              <span className="footerTopic">Latest News</span>
              <hr className="underlineHR" />
            </div>
            <div className="footerContent">
              <p>
                Add dialogs to your site for lightboxes, user notifications, or
                completely custom content.
              </p>
              <div className="d-flex">
                <div>
                  <ChevronRight className="footerRightIcon" />
                </div>
                <div>
                  Add dialogs to your site for lightboxes, user notifications,
                  or completely custom content.
                </div>
              </div>
              <div className="d-flex py-2">
                <div>
                  <ChevronRight className="footerRightIcon" />
                </div>
                <div>
                  Add dialogs to your site for lightboxes, user notifications,
                  or completely custom content.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="col-md">
              <span className="footerTopic">Customer Service</span>
              <hr className="underlineHR" />
            </div>
            <div className="footerContent">
              <ul>
                <li>Support Features</li>
                <li>Communications</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Rules & Conditions</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="col-md">
              <span className="footerTopic">Customer Service</span>
              <hr className="underlineHR" />
            </div>
            <div className="gridItems">
              <div>
                <img src={imageOne} className="gridImage" alt="img1" />
              </div>
              <div>
                <img src={imageTwo} className="gridImage" alt="img2" />
              </div>
              <div>
                <img src={imageOne} className="gridImage" alt="img3" />
              </div>
            </div>
            <div className="gridItems">
              <div>
                <img src={imageTwo} className="gridImage" alt="img3" />
              </div>
              <div>
                <img src={imageOne} className="gridImage" alt="img4" />
              </div>
              <div>
                <img src={imageTwo} className="gridImage" alt="img5" />
              </div>
            </div>
          </div>
        </div>

        <div className="bottomRow row d-flex justify-content-between">
          <div className="col-6 ">
            <span>
              Copyright @ 2021 All Rights Reserved. Site By Xiteb&reg;
            </span>
          </div>
          <div className="col-6 d-flex justify-content-end ">
            <div className="roundedIcon">
              <Facebook className="socialIcon" />
            </div>
            <div className="roundedIcon">
              <Instagram className="socialIcon" />
            </div>
            <div className="roundedIcon">
              <Twitter className="socialIcon" />
            </div>
            <div className="roundedIcon">
              <Youtube className="socialIcon" />
            </div>
            <div className="roundedIcon">
              <Whatsapp className="socialIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
