import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"


const designs = [
  {
    name: "UtahSec #1",
    description: "A logo for University of Utah's cybersecurity club.",
    image: "/utahsec1.png",
  },
  {
    name: "UtahSec #2",
    description: "Another logo for University of Utah's cybersecurity club.",
    image: "/utahsec2.png",
  },
  {
    name: "CTF Team",
    description: "A logo for University of Utah's official capture-the-flag team.",
    image: "/utahsec3.png",
  },
]

const DesignSection = () => {
  return (
    <section id="designs">
    <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="my-10 text-center font-bold text-4xl">
        Designs
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {designs.map((design, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                      <Image
                        src={design.image}
                        alt=""                        
                        width={500}
                        height={500}
                        className="rounded-xl shadow-xl hover:opacity-70 border-solid"
                      />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{design.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {design.description}
                    </p>
                    
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
      </div>
    </section>
  )
}

export default DesignSection
