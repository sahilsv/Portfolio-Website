import React from "react";

import Scroller from "../../components/scroller";
import Contact from "../../components/contact";
import { socials } from "../../data";
import { HeroMd } from "../../assets";

function About() {
  return (
    <>
      <section className="py-12 border-x-2 border-black">
        <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              My Story
            </h1>
            <p className="mb-2 text-lg">
              Hi, I'm Sahil. I am a self taught developer with interest in Web
              Development.
            </p>

            <p className="mb-2 text-lg">
              I have built projects using technologies like React, TailwindCSS
              and MongoDB. Currently upskilling in DevOps.
            </p>

            <div className="text-lg font-bold">Find me on:</div>

            <div className="mb-8">
              <ul className="flex gap-6 mt-2">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a
                      target="_blank"
                      href={item.link}
                      rel="noopener noreferrer"
                      className="py-2 flex-col md:flex-row gap-2 items-center justify-center"
                    >
                      <img
                        src={item.icon}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <img
              src={HeroMd}
              alt="Me programming"
              className="border-black border-2 rounded-2xl mb-8"
            />
          </div>
        </div>
      </section>

      <Scroller
        text={"Have a project in mind?👨‍💻 Let's get to work!🚀"}
        link="/contact"
      />
      <Contact />
    </>
  );
}

export default About;
