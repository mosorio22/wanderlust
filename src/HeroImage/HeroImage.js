import React from "react";
import "./HeroImage.css";
import InputForm from "../InputForm/InputForm";

function HeroImage() {
  return (
    <section className="hero-image">
      <div className="hero-text">
        <h1>Wanderlust</h1>
        <p>Adventure Awaits</p>
        <div className="input">
          <InputForm />
        </div>
      </div>
    </section>
  );
}

export default HeroImage;
