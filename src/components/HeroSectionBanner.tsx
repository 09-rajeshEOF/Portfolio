"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { products } from "@/utils/data";
export function HeroSectionBanner() {
  return <HeroParallax products={products} />;
}
