"use client";
import Footer from "./(auth)/components/footer";
import Hero from "./(auth)/components/hero";
import Guide from "./(auth)/components/guide";
import Features from "./(auth)/components/features";
import Pricing from "./(auth)/components/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Guide />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}
