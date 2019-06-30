import React from "react";
import CategoryListItem from "../components/CategoryListItem";

import { LinkContainer } from "react-router-bootstrap";
import headshot from "../assets/headshot_cropped.png";
import { SocialIcons } from "../assets/SocialIcons";
import { Button } from "react-bootstrap";
import "../styles/About.scss";

const About = () => (
  <>
    <div className="content-container">
      <div />
      <div>
        <div id="about-container">
          <div id="about-blurb">
            <h2>HI. I'M KENNETH</h2>
            <p>
              I'm a multidisciplinary software and hardware engineer with an MS
              in Mechanical Engineering from Virginia Tech and experience in
              product & experience design, web development, robotics, and
              electronics. For the past 9 years I've built a bunch of crazy and
              creative projects that lie at the intersection of physical and
              digital, including jellyfish robots, internet-of-things devices,
              huge experiential campaigns, and highly complex moving models of
              the solar system.
            </p>
            <p>
              Though I'm a mechanical engineer by trade, I have tons of
              experience with electronics and code too. Having a
              multidisciplinary skillset allows me to bridge gaps in diverse
              teams and brings a strong sense of coherence to my work.
            </p>
          </div>
          <div id="about-links">
            <img src={headshot} alt="headshot" />
            <SocialIcons />
            <Button>RESUME</Button>
          </div>
        </div>
        <div id="about-details">
          <h2>WHAT I DO</h2>
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <CategoryListItem />
          <p>
            I know this might sound like a lot! But I’ve been fortunate enough
            to work on incredibly diverse projects that have required some or
            all of these disciplines. I consider myself a lifelong learner, and
            am constantly updating and refining my skillset through my work and
            side projects. Not to mention I also love what I do!
          </p>
          <LinkContainer to="/work">
            <Button>WORK</Button>
          </LinkContainer>
        </div>
      </div>
      <div />
    </div>
  </>
);

export default About;
