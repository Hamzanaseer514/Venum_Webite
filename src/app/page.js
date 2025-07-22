import React from "react";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import MegaMenu from "@/Components/MegaMenu";

const page = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="relative">
        <MegaMenu />
      </div>
    </div>
  );
};

export default page;
