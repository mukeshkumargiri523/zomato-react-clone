import React, { useState } from "react";
import Header from "../../components/common/header/Header";
import TabOptions from "../../components/common/tabOptions/TabOptions";
import Footer from "../../components/common/footer/Footer";
import Delivery from "../../components/delivery/Delivery";
import DiningOut from "../../components/diningOut/DiningOut";
import Nightlife from "../../components/nightlife/Nightlife";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default Home;
