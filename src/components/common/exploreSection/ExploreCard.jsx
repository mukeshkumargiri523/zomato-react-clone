import React from "react";
import "./ExploreCard.css";
const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const coverImg = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const approxPrice = restaurant?.info?.cfo?.text;
  const timing = restaurant?.info?.timing?.text;
  const distance = restaurant?.distance;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);

  const bottomContainer = restaurant?.bottomContainers;
  const goldOffer = restaurant?.gold?.offerValue;
  const proOffer = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
      ? offers[0].text
      : null;
  return (
    <div className="explore-card cur-pointer">
      <div className="explore-card-cover">
        <img className="explore-card-image" src={coverImg} alt="" />
        {proOffer && <div className="pro-offer"> {proOffer}</div>}
        {goldOffer && (
          <div className="gold-offer absolute-center">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png"
              alt="Zomato Gold"
              className="gold-icn"
            />
            {restaurant?.gold?.text} {goldOffer}
          </div>
        )}
        {discount && <div className="discount absolute-center">{discount}</div>}
        <div className="res-row">
          <div className="res-name">{name}</div>
          {rating && (
            <div className="res-rating">
              {rating} <i class="fa-regular fa-star absolute-center"></i>
            </div>
          )}
        </div>
        <div className="res-row">
          {cuisines.length && (
            <div className="res-cuisine">
              {cuisines.map((item, i) => {
                return (
                  <span className="res-cuisine-name">
                    {item}
                    {i !== cuisines.length - 1 && ", "}
                  </span>
                );
              })}
            </div>
          )}
          {approxPrice && <div className="approxPrice">{approxPrice}</div>}
        </div>
        {deliveryTime ? (
          <div className="res-row">
            <div className="delivery-time">{deliveryTime}</div>
          </div>
        ) : (
          <div className="res-row">
            <div className="open-time">{timing}</div>
            <div className="distance">{distance}</div>
          </div>
        )}
      </div>

      {bottomContainer.length > 0 && (
        <>
          <div className="card-separator"></div>
          {/* <div className="res-row"> */}
          <div className="explore-bottom">
            <img
              src={bottomContainer[0]?.image.url}
              alt="safe delivery"
              style={{ height: "20px" }}
            />
            <div className="res-bottom-text">{bottomContainer[0]?.text}</div>
          </div>
          {/* </div> */}
        </>
      )}
    </div>
  );
};

export default ExploreCard;
