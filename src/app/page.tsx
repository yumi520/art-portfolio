"use client"
import AboutBlurb from "./components/AboutBlurb/aboutBlurb";
import Explore from "./components/Explore/explore";
import Navbar from "./components/Navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <AboutBlurb/>
      <Explore/>
    </div>
  );
}
