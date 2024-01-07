import React from "react";
import "./TopBrands.css";
import NextArrow from "../../common/carousel/NextArrow";
import PrevArrow from "../../common/carousel/PrevArrow";
import Slider from "react-slick";

const brandList = [
  {
    id: 1,
    time: "28 min",
    title: "Priya",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/e8b5a9a0bef7eb95ccba03c7f01f9c7e_1611314338.png",
  },
  {
    id: 2,
    time: "24 min",
    title: "Burger King",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187772.png",
  },
  {
    id: 3,
    time: "15 min",
    title: "KFC",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433084.png",
  },
  {
    id: 4,
    time: "32 min",
    title: "Pizza Hut",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7059708ecf9568fc43490b7dad4c8f85_1672381496.png",
  },
  {
    id: 5,
    time: "17 min",
    title: "Green Chillyz",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/19f79b1a64b30f8a3ba58e540f8bf218_1581917577.png",
  },
  {
    id: 6,
    time: "32 min",
    title: "Shirose Restaurant & Sweets",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/cc5cd77a737e2d2f624aad56e17a5c74_1699027697.png",
  },

  {
    id: 7,
    time: "17 min",
    title: "WOW! Momo",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389470.png",
  },
  {
    id: 8,
    time: "15 min",
    title: "Mio Amore",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7013fa5250ecaba145d9437a3ba9f1ec_1492582809.png",
  },
  {
    id: 9,
    time: "26 min",
    title: "Oberai Bakers & Cafe",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/dcd6ea23e8e4acbb694c9d3310db58bf_1611317285.png",
  },
  {
    id: 10,
    time: "19 min",
    title: "Afiya Delight",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6ed3af5d4f1f8d62d85db4d8f8cd3af1_1618829656.png",
  },
];

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
function TopBrands() {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {brandList.map((brand) => {
          return (
            <>
              <div className="top-brand-container">
                <div className="top-brands-cover">
                  <img
                    src={brand.cover}
                    className="top-brand-image"
                    alt={brand.title}
                  />
                </div>
                <span className="topbrand-title">{brand.title}</span>
                <span className="topbrand-time">{brand.time}</span>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}

export default TopBrands;
