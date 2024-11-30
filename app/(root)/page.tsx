import CategoriesSection from "@/components/Categories";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <StatsSection />
      <CategoriesSection />
    </div>
  );
};

export default page;
