import React from "react";
import {LocationOn,Phone,Mail} from "@material-ui/icons"
import "./footer.css";

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerLeft">
        <h2>Sidharth</h2>
        <p>
          Founder and CEO of <b>WOMZONE</b>. we provides you with the best
          shopping experience you can ever get from any platform online.You can
          think of us as your shopping advisor and we are always committed to
          proivde you with the best possible experience.
        </p>
      </div>
      <div className="footerCenter">
        <h3>Usefull links</h3>
        <div className="usefullLinks">
          <div className="linkColumn">
            <div className="eachLink">Home</div>
            <div className="eachLink">About</div>
            <div className="eachLink">Categories</div>
            <div className="eachLink">Products</div>
          </div>
          <div className="linkColumn">
            <div className="eachLink">Offers</div>
            <div className="eachLink">Retail buy</div>
            <div className="eachLink">WholeSale buy</div>
            <div className="eachLink">Distributors</div>
          </div>
        </div>
      </div>
      <div className="footerRight">
        <h3>Contact</h3>
        <div className="footerRightDetails">
          <span className="address"><LocationOn className="locationIcon" /> Kochi, Ernakulam, Kerala, 682317</span>
          <span className="address"><Phone className="locationIcon" />9446348567</span>
          <span className="address"><Mail className="locationIcon" />sidharthsanal01@gmail.com</span>
          <div className="cardsSection">
            <img src="https://logosmarcas.net/wp-content/uploads/2020/09/Mastercard-Simbolo.jpg"/>
            <img src="https://imgr.search.brave.com/89iLCRafFfm9ANmRBFOP0-uSn0ETf2xo_Ipdjfi6ioE/fit/1200/1128/ce/1/aHR0cDovL2NkbjEu/dG53Y2RuLmNvbS93/cC1jb250ZW50L2Js/b2dzLmRpci8xL2Zp/bGVzLzIwMTQvMDQv/U2NyZWVuLVNob3Qt/MjAxNC0wNC0zMC1h/dC0xOC4xOC41NS5w/bmc"/>
            <img src="https://thedigitalfifth.com/wp-content/uploads/2019/10/Banner15-1170x480.png"/>
            <img src="https://imgr.search.brave.com/iwVXG1Q5LbZLLi8Y3gWDv0h4qPcZjTvDxGVKFQ5IAYM/fit/1024/724/ce/1/aHR0cHM6Ly93d3cu/ZnJlZXZlY3Rvci5j/b20vdXBsb2Fkcy92/ZWN0b3IvcHJldmll/dy85OTMyL0ZyZWVW/ZWN0b3ItVmlzYS1W/ZWN0b3ItTG9nby5q/cGc"/>
            <img src="https://imgr.search.brave.com/vXERaXxBbSp1J7iRf8NfEGT3W0aXoldcwuyXqrSkyRE/fit/1200/592/ce/1/aHR0cHM6Ly93d3cu/aG93dG9nZWVrLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMS9Hb29nbGUt/UGF5LWhlcm8ucG5n/P2hlaWdodD0yMDBw/JnRyaW09MiwyLDIs/Mg"/>
          </div>
        </div>
        </div>

    </div>
  );
}

export default Footer;
