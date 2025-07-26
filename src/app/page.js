import React from "react";
import Hero from "@/Components/Hero";
import GloveCarousel from "@/Components/GloveCarousel";
import Banner from "@/Components/Banner";
import Discovercategories from "@/Components/Discovercategories";
import GenderCategory from "@/Components/GenderCategory";
import InfoBanner from "@/Components/InfoBanner";
import VenumCustom from "@/Components/VenumCustom";
import {categoryProducts,discovernewcategory,discovernewsports} from "../Data/data.js"; 
import FullBanner from "@/Components/FullBanner";

const buttons = [
  { text: "See all", slug: "all" },
  { text: "Equipment", slug: "equipment" },
  { text: "Men", slug: "men" },
  { text: "Women", slug: "women" },
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
        products={discovernewcategory}
        // defaultCategory="Equipment"
        height=" 550px"
      />
      <Discovercategories
        heading="Discover our Sports"
        products={discovernewsports}
        // defaultCategory="Equipment"
        height="550px"
      />
      <FullBanner 
        backgroundImage="/images/fullbanner.jpg"
        buttonText="Shop Collection"
      />
      <GenderCategory />
      <VenumCustom />
      <InfoBanner />
    </div>
  );
};

export default page;
