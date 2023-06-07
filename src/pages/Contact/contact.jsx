import React from 'react'
import { socials } from "../../data";

function Contact() {
  return (
    <>
      <section className="py-12 border-x-2 border-black">
        <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              My Story
            </h1>
            <p className="mb-6 text-lg">
              Ever want to contact me? If you're looking for help with your creative business, have a burning question to ask me or simply want to interact, the quickest way to get my attention is to hit me up on my e-mail. 
            </p>

            <p className="mb-6 text-xl">
              Want my e-mail: sahilsv003@gmail.com
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
            
          </div>

        </div>
      </section>

    </>
  )
}

export default Contact