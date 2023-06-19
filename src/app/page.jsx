"use client"
import Hero from "./components/Hero";
import Howwework from "./components/Howwework";
import Navbar from "./components/section/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar>
          <Hero />
          <Howwework />
        </Navbar>
      </div>
    </>
  );
}
