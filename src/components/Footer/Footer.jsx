import React from "react";

import {
    InstagramOutlined,
    FacebookOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    WhatsAppOutlined,
    ToTopOutlined
} from "@ant-design/icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
          <div style={{textAlign:"center"}}>
          <a  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><img style={{width:"40px", marginTop:"25px"}} src="https://www.pngkey.com/png/full/528-5281777_back-to-top-voltron-green-lion-symbol.png" alt="" /></a>
          </div> 
      <div className="footer-cintainer">
        <div className="footer-inner__container">
          <div className="footer-blocks">
            <div className="footer-item">
              <img src="http://unionagency.one/delice/img/logo.png" alt="" />
              <div
                style={{
                  position: "relative",
                  color: "#898989",
                  marginTop: "20px",
                  lineHeight: "25px",
                }}
              >
                <p style={{ fontSize: "14px" }}>
                  Ut enim ad minim veniam, quis nostrud at <br /> exercitation
                  ullamco laboris nisi nemo sit <br /> enim ipsam voluptatem
                  quia voluptas
                </p>
              </div>

              <div class="footer-icons">
                <a className="foot-icon">
                  <InstagramOutlined />
                </a>
                <a className="foot-icon">
                  <FacebookOutlined />
                </a>
                <a className="foot-icon">
                  <TwitterOutlined />
                </a>
                <a className="foot-icon">
                  <YoutubeOutlined />
                </a>
                <a className="foot-icon">
                  <WhatsAppOutlined />
                </a>
              </div>
            </div>
            <div className="footer-item" style={{ color: "white" }}>
              <h5 style={{ fontSize: "17px", color: "#fff" }}>WORK TIME</h5>
              <div style={{ position: "relative", color: "#898989" }}>
                <p
                  style={{
                    marginBottom: "8px",
                    fontSize: "17px",
                    marginTop: "15px",
                  }}
                >
                  Monday - Friday------09:00 - 23:00
                </p>
                <p style={{ marginBottom: "8px", fontSize: "17px" }}>
                  Saturday----------------11:00 - 01:00
                </p>
                <p style={{ marginBottom: "8px", fontSize: "17px" }}>
                  Sunday------------------12:00 - 23:00
                </p>
              </div>
            </div>
            <div className="footer-item" style={{ color: "white" }}>
              <h5 style={{ fontSize: "17px", color:"white" }}>CONTACT US</h5>
              <div style={{ position: "relative", color: "#898989" }}>
                <p
                  style={{
                    marginBottom: "8px",
                    fontSize: "14px",
                    marginTop: "15px",
                  }}
                >
                  150 Duffy Ave, Hicksville, NY 11801, USA
                </p>
                <p style={{ marginBottom: "8px", fontSize: "14px" }}>
                  +38 056 23 15 7851
                </p>
                <p style={{ marginBottom: "8px", fontSize: "14px" }}>
                  delice.info@mail.com
                </p>
              </div>
            </div>
            <div className="footer-item" style={{ color: "white" }}>
              <h5 style={{ fontSize: "17px", color:"white" }}>SUBSCRIBE TO OUR NEWS</h5>
              <div style={{ display: "flex" }}>
                <input
                  className="subs-foot"
                  type="text"
                  placeholder="Your email"
                />
                <from className="submit-foot">
                  <span>Submit</span>
                </from>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <div style={{ color: "#181a1c" }}>empty</div>
        <span>
          © 2017 All Rights Reserved. Development by{" "}
          <a style={{ color: "#f4a01b", textDecoration: "none" }} href="">
            UnionAgency
          </a>
        </span>
        <div style={{ color: "#181a1c" }}>empty</div>
      </div>
    </footer>
  );
};

export default Footer;
