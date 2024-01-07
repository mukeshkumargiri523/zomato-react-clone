import React from "react";
import "./Collection.css";
import NextArrow from "../carousel/NextArrow";
import PrevArrow from "../carousel/PrevArrow";
import Slider from "react-slick";

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
function Collection({ list }) {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collection</div>
        <div className="collection-subheading-row">
          <div className="left-subheading">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bhubaneswar, based on trends
          </div>
          <span className="right-subheading">
            All collections in Bhubaneswar
            <i class="fa-solid fa-caret-right absolute-center"></i>
          </span>
        </div>
        <Slider {...settings}>
          {list.map((item) => {
            return (
              <>
                <div className="collection-cover">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="collection-image"
                  />
                  <div className="gradient-bg"> </div>
                  <div className="more-gradient-bg">
                    <div className="collection-card-title">{item.title}</div>
                    <div className="collection-card-subtitle">
                      <div>{item.place}</div>
                      <i className="fa-solid fa-caret-right absolute-center"></i>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Collection;
