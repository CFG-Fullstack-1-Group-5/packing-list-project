import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import React from "react";
import AboutCard from "../components/about-card/AboutCard";
import "./About.css";


function AboutPage() {
  return (
    <>
      <Header />

      <div className="Welcome">
        <h1 className="heading">About us</h1>
      </div>
      <section className="about-cards-list">
        <AboutCard 
            teamMemberName="Joanna"
            teamMemberInfo="Text goes here"
        />
                <AboutCard 
            teamMemberName="Rachel B"
            teamMemberInfo="Text goes here"
        />
                <AboutCard 
            teamMemberName="Laura"
            teamMemberInfo="Text goes here"
        />
                <AboutCard 
            teamMemberName="Rachel G"
            teamMemberInfo="Text goes here"
        />
                <AboutCard 
            teamMemberName="Kavita"
            teamMemberInfo="Text goes here"
        />
      </section>
    </>
  );
}

export default AboutPage;
