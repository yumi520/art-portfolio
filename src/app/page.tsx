"use client"
import AboutBlurb from "./components/AboutBlurb/AboutBlurb";
import CommissionBlurb from "./components/CommissionBlurb/CommissionBlurb";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <AboutBlurb/>
      <Explore/>
      <CommissionBlurb/>
      <Footer/>
    </div>
  );
}
