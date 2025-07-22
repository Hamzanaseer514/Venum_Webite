import React from "react";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import MegaMenu from "@/Components/MegaMenu";
import Hero from "@/Components/Hero";
import GloveCarousel from "@/Components/GloveCarousel";
import Banner from "@/Components/Banner";
import Discovercategories from "@/Components/Discovercategories";
import GenderCategory from "@/Components/GenderCategory";
import InfoBanner from "@/Components/InfoBanner";
import VenumCustom from "@/Components/VenumCustom";
import Footer from "@/Components/Footer";
import products from "../Data/data.json"; 

const buttons = [
  { text: "See all", href: "https://eu.venum.com/collections/outlet" },
  { text: "Equipment" },
  { text: "Men" },
  { text: "Women" },
];
const page = () => {
  return (
    <div>
      <div className="">
        <MegaMenu />
      </div>
      <Hero buttons={buttons} />
      <GloveCarousel />
      <Banner />
      <Discovercategories
        heading="Discover our Categories"
        categories={["Equipment", "Men", "Women", "Kids"]}
        products={products}
        defaultCategory="Equipment"
         height="500px"
      />
      <Discovercategories
        heading="Discover our Collection"
        products={products}
        defaultCategory="Equipment"
        height=" 600px"
      />
      <Discovercategories
        heading="Discover our Sports"
        products={products}
        defaultCategory="Equipment"
        height="600px"
      />
      <GenderCategory />
      <VenumCustom />
      <InfoBanner />
    </div>
  );
};

export default page;
