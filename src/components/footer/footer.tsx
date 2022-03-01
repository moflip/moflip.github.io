import React from "react"
import "./footer.css"
import whiteLogo from "../../images/tiketnft-logo-horizontal-white.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-12 col-md-6">
            <p className="text-justify">® 2022 tiketnft.com</p>
          </div> */}

          <div className="col-sm-12 col-md-6">
            <img src={whiteLogo} alt="" className="h-12"/>
          </div>
        </div>
      </div>

    <hr/>

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <a href="" className="link-margin">Home</a>
            <a href="" className="link-margin">About Us</a>
            <a href="" className="link-margin">Help Center</a>
          </div>
          

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="instagram" href="https://www.instagram.com/tiketnft#">
              <FontAwesomeIcon icon={faInstagram} /> </a></li>
              <li><a className="twitter" href="https://www.twitter.com/tiketnft#">
              <FontAwesomeIcon icon={faTwitter} /> </a></li>
              <li><a className="facebook" href="https://discord.gg/vpKewhGs4c">
              <FontAwesomeIcon icon={faDiscord} /> </a></li>   
            </ul>
          </div>
        </div>
      </div>
</div>

  )
}