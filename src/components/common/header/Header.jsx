import React from "react";
import "./Style.css";
function Header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato_logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rs-marker absolute-center location-icon"></i>
              <div>Bhubaneswar</div>
            </div>
            <i class="fa-solid fa-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-search-bar">
            <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
            <input
              type="text"
              placeholder="Search For restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3BmLWljb240LWppcjIwNjItcG9yLWwtam9iNzg4LnBuZw.png"
            alt="profile"
            className="header-profile-image"
          />
          <span className="header-username">Mukesh</span>
          <i className="fi fi-ts-angle-small-down absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
