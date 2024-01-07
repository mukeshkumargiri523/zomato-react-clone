import React from "react";
import "./Style.css";
import Collection from "../common/collection/Collection";
import Filters from "../common/filters/Filters";
import ExploreSection from "../common/exploreSection/ExploreSection";
import { diningOutRestaurant } from "../../data/DiningOut";

const collectionList = [
  {
    id: 1,
    title: "7 Best Luxury Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1694690149.jpg",
    place: "7 Places",
  },
  {
    id: 2,
    title: "16 Best Bars & Pubs",
    cover:
      "https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1694688879.jpg",
    place: "16 Places",
  },
  {
    id: 3,
    title: "9 Places for Authentic Odia Cuisine",
    cover:
      "https://b.zmtcdn.com/data/collections/e2a77af428c8806570838ef7bc5c1ed1_1694690561.jpg",
    place: "9 Places",
  },
  {
    id: 4,
    title: "9 Great Cafes",
    cover:
      "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1694690253.jpg",
    place: "9 Places",
  },
  {
    id: 5,
    title: "8 Serene Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1694688622.jpg",
    place: "8 Places",
  },
  {
    id: 6,
    title: "8 Classic Biryani Places",
    cover:
      "https://b.zmtcdn.com/data/collections/987b94838d4982dfbf8a6b7d4b121483_1696416343.jpeg",
    place: "8 Places",
  },
  {
    id: 7,
    title: "9 Places for South Indian Delicacies",
    cover:
      "https://b.zmtcdn.com/data/collections/519dd36d372bf9346a1c1c719178a64f_1694689150.jpeg",
    place: "9 Places",
  },
];

const diningOutFilters = [
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
    title: "Outdoor Seating",
  },
  {
    id: 5,
    icon: <i class="fa-solid fa-crown absolute-center"></i>,
    title: "Gold",
  },
  {
    id: 6,

    title: "Serves Alcohol",
  },
  {
    id: 7,
    title: "Open Now",
  },
];

function DiningOut() {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningOutFilters} />
        <div className="max-width">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
            alt="offer-banner"
            className="offer-banner"
          />
        </div>
      </div>

      <ExploreSection
        list={diningOutRestaurant}
        collectionName="Dine-Out Restaurants in Bhubaneswar"
      />
    </div>
  );
}

export default DiningOut;
