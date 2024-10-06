import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From Code to Canvas: Explore our suite of services—full-stack
          development, mobile app wizardry, and visual enchantment. Your digital
          dreams, our expertise.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              Our team lives and breathes code. From the front-end magic that
              captivates users to the robust back-end architecture that powers
              it all, we have got you covered.
            </ListItem>
            <ListItem title="Application development">
              Mobile-first is our mantra. We build sleek, responsive, and
              user-friendly mobile apps that seamlessly integrate with your
              brand
            </ListItem>
            <ListItem title="Graphics Wizards">
              Our creative wizards wield pixels like magic. From VFX (visual
              effects) that transport users to otherworldly realms to 3D
              animations that breathe life into your brand, we are passionate
              about visual storytelling.
            </ListItem>
            <ListItem title="Collaboration">
              Kunjon Labs is not just a team; we are a family. We collaborate,
              brainstorm, and iterate together.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
