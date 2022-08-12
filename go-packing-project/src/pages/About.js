import Header from "../components/Header/Header";
import React from "react";
import AboutCard from "../components/AboutCards/AboutCards";
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
          // Joanna About Me Info
          teamMemberName="Joanna"
          teamMemberInfo="Hi, I’m Joanna. A librarian trying her luck in programming. The GoPacking project presented a lot of interesting challenges that were very rewarding to work through. Hopefully, thanks to it, I will for once know what clothes are suitable to pack for the weather of my destination."
        />
        <AboutCard
          // Rachel B About Me Info
          teamMemberName="Rachel B"
          teamMemberInfo="Hi! I’m Rachel, a full stack student and career switcher. I have a real passion for travelling and clothes, so GoPacking was an exciting project to be a part of. My favourite part of the app is the checklist - because if you're anything like me, you’ll forget to pack something without it!"
        />
        <AboutCard
          // Laura About Me Info
          teamMemberName="Laura"
          teamMemberInfo="Hello, I’m Laura, a junior full stack web developer with a  background in the arts and interiors. As a compulsive list-maker, the GoPacking project has really appealed to my love of organisation and I’ve enjoyed keeping it as streamlined and intuitive as possible. "
        />
        <AboutCard
          // Rachel G About Me Info
          teamMemberName="Rachel G"
          teamMemberInfo="I’m Rachel, an aspiring full-stack developer, transitioning from a career within the financial industry. Working on this project has been a rewarding and enjoyable challenge, that has allowed me to bring my love of both travelling and technology together."
        />
        <AboutCard
          // Kavita About Me Info
          teamMemberName="Kavita"
          teamMemberInfo="Hi, I’m Kavita! I’m switching careers from research to software development.  I love to travel to new places but packing to cover all weather scenarios can be a tricky task, so GoPacking has been the perfect project to be a part of! I love the simplicity of our design."
        />
      </section>
    </>
  );
}

export default AboutPage;
