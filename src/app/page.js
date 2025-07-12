"use client";
import Footer from "./(auth)/_components/footer";
import Hero from "./(auth)/_components/hero";
import Guide from "./(auth)/_components/guide";
import Features from "./(auth)/_components/features";
import Pricing from "./(auth)/_components/pricing";
import Faq from "./(auth)/_components/faq";
import Navbar from "./(auth)/_components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Guide />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
    </>
  );
}
