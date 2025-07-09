"use client";
import Footer from "./(auth)/_components/footer";
import Hero from "./(auth)/_components/hero";
import Guide from "./(auth)/_components/guide";
import Features from "./(auth)/_components/features";
import Pricing from "./(auth)/_components/pricing";

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