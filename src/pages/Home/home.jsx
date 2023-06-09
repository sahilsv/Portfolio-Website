import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Scroller from "../../components/scroller";
import Contact from "../../components/contact";
import { portfolioData } from "../../data";
import { HeroSm, HeroMd, HeroLg, PortfolioPattern, Services } from "../../assets";

function Home() {
  return (
    <div className="border-black border-x-2 ">
      <section className="py-10 lg:py-36 xl:py-48">
        <div className="container mx-auto gap-8 px-4 flex flex-col md:flex-row items-center">
          <div className="md:flex-1 md:order-2">
            <picture className="flex drop-shadow-[10px_-10px_0_rgba(250,204,21,1)] border-black rounded-tl-[100px] rounded-br-[100px] rounded-xl overflow-hidden">
              <source
                srcSet={HeroSm}
                width="363"
                height="222"
                media="(max-width: 400px)"
                type="image/jpg"
              />
              <source
                srcSet={HeroMd}
                width="608"
                height="372"
                media="(max-width: 400px)"
                type="image/jpg"
              />
              <img
                src={HeroLg}
                width="870"
                height="532"
                alt="Me working hard on a computer"
              />
            </picture>
          </div>

          <div className="md:flex-1">
            <h2 className="text-lg md:text-xl font-bold uppercase">
              Hi 👋 I'm Sahil.
            </h2>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Developer. <br />
              Content Creator.
            </h1>

            <p className="text-md max-w-xl mb-6">
              I am a Web development enthusiast, interested in building systems
              for the web and always looking to learn.
            </p>

            <div className="flex items-baseline gap-4">
              <HashLink
                to="#work"
                className="px-6 py-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white"
              >
                Selected Work
              </HashLink>

              <Link
                to="/contact"
                className="px-6 py-4 rounded-md text-black flex gap-2"
              >
                Let's Talk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Scroller
        text={"Have a project in mind?👨‍💻 Let's get to work!🚀"}
        link="/contact"
      />

      <section
        id="work"
        className="px-4 pb-12 border-black border-t-2 bg-teal-600 bg-fixed"
        style={{ backgroundImage: "url(" + PortfolioPattern + ")" }}
      >
        <div className="container mx-auto">
          <div className="text-white text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Selected Work
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              I've been learning various technologies with the aim of becoming a
              full stack developer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-28">
            {portfolioData.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="md:even:pt-12 ease-in-out duration-75 hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
              >
                <div className="border-2 border-black rounded-xl overflow-hidden bg-black">
                  <img src={item.thumbnail} alt={item.alt} loading="lazy" />
                </div>

                <div className="bg-white border-x-2 border-black border-b-2 rounded-b-xl mx-4 p-4 text-lg flex justify-between gap-4 items-center">
                  <div>
                    <span className="font-bold">{item.title} </span>
                    <span className="text-zinc-400">
                      &#9679;{item.category}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to={"/work"}
            className="flex gap-4 font-bold text-white text-xl justify-center mb-8"
          >
            View all work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section className="border-black border-t-2 px-4 py-12">
        <div className="container mx-auto">
          <div className="text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              Services
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              I've been learning various technologies with the aim of becoming a
              full stack developer.
            </p>
          </div>

          <div className="text-black py-12 grid lg:grid-cols-4 items-center ">
            <div>
              <h3 className="text-3xl font-bold mb-4">Web design</h3>
              <p className="mb-4 text-lg">
                I am a Web development enthusiast, interested in building
                systems for the web and always looking to learn.
              </p>
              <Link
                to={"/web-design"}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>

              <h3 className="text-3xl font-bold mb-4">Web development</h3>
              <p className="mb-4 text-lg">
                I am a Web development enthusiast, interested in building
                systems for the web and always looking to learn.
              </p>
              <Link
                to={"/web-development"}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>


            </div>

            <div className="flex justify-center mb-12 md:mb-0 col-span-2">
              <img src={Services} alt="Services offered by me" width='611' height='764' loading='lazy' className="border-2 border-black rounded-full w-3/5 mb-10 drop-shadow-[10px_-10px_0_rgba(250,204,21,1)]" />
            </div>
            <div>

            <h3 className="text-3xl font-bold mb-4">Branding</h3>
              <p className="mb-4 text-lg">
                I am a Web development enthusiast, interested in building
                systems for the web and always looking to learn.
              </p>
              <Link
                to={"/branding"}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>

              <h3 className="text-3xl font-bold mb-4">Java Development</h3>
              <p className="mb-4 text-lg">
                I am a Web development enthusiast, interested in building
                systems for the web and always looking to learn.
              </p>
              <Link
                to={"/java-development"}
                className="flex gap-2 items-center font-bold mb-14 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>

            </div>
          </div>
        </div>
      </section>

      <Contact />


      
    </div>
  );
}

export default Home;
