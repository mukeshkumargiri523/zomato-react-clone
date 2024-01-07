import React from "react";
import "./Style.css";
import Filters from "../common/filters/Filters.js";
import DeliveryCollection from "./deliveryCollections/DeliveryCollection.jsx";
import TopBrands from "./topBrands/TopBrands.jsx";
import { restaurants } from "../../data/Restauraunt.js";
import ExploreSection from "../common/exploreSection/ExploreSection.jsx";

const deliveryFilters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  { id: 3, title: "Pure Veg" },
  {
    id: 4,
    icon: <i className="fi fi-ts-angle-small-down absolute-center"></i>,
    title: "Cuisines",
  },
];
const restaurantList = restaurants;
function Delivery() {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Best Food in Bhubaneswar"
      />
    </div>
  );
}

export default Delivery;
