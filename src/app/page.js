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
import {categoryProducts} from "../Data/data.js"; 

const buttons = [
  { text: "See all", href: "https://eu.venum.com/collections/outlet" },
  { text: "Equipment" },
  { text: "Men" },
  { text: "Women" },
];
const page = () => {
  return (
    <div>
    
      <Hero buttons={buttons} />
      <GloveCarousel />
      <Banner />
      <Discovercategories
        heading="Discover our Categories"
        categories={["Equipment", "Men", "Women", "Kids"]}
        products={categoryProducts}
        defaultCategory="Equipment"
         height="500px"
      />
      <Discovercategories
        heading="Discover our Collection"
        products={categoryProducts}
        defaultCategory="Equipment"
        height=" 600px"
      />
      <Discovercategories
        heading="Discover our Sports"
        products={categoryProducts}
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
