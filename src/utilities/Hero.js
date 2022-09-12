import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="hero h-96	  bg-cover bg-no-repeat    bg-top hero-home ">
        <div></div>
        <div className="hero-content    flex justify-end  w-full text-left ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl ">
              <span className="font-bold">Black Friday </span> Sale
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
