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
            teamMemberInfo="Hi, I’m Joanna, a librarian that is trying her luck in programming. The GoPacking project presented a lot of interesting challenges and it was very rewarding to work through them. And hopefully thanks to it I will for once know what clothes suitable for the weather of my destination to pack."
        />
                <AboutCard 
            teamMemberName="Rachel B"
            teamMemberInfo="Hi! I’m Rachel, a full stack student and career switcher. I have a real passion for travelling and clothes so GoPacking was an exciting project to be part of. My favourite part of the GoPacking app is the checklist - because if you're anything like me you’ll forget to pack something without it!"
        />
                <AboutCard 
            teamMemberName="Laura"
            teamMemberInfo="Hello, I’m Laura, a junior full stack web developer with a  background in the arts and interiors. As a compulsive list-maker, the GoPacking project has really appealed to my love of organisation and I’ve enjoyed keeping it as streamlined and intuitive as possible. "
        />
                <AboutCard 
            teamMemberName="Rachel G"
            teamMemberInfo="I’m Rachel, a junior full-stack software engineer who transitioned from a career within the financial industry. Working on this project and helping to create a tool that I know I would have greatly benefited from in the past has been an enjoyable way to bring my love of both travelling and learning about new technologies together. "
        />
                <AboutCard 
            teamMemberName="Kavita"
            teamMemberInfo="Hi, I’m Kavita! I’m switching careers from research to software development.  I love to travel to new places but packing to cover all weather scenarios can be a tricky task, so GoPacking has been the perfect project to be a part of! I love the simplicity of our design."
        />
      </section>
    </>
  );
}

export default AboutPage;
