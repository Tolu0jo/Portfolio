"use client";
import React,{useState} from 'react';
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiFillGithub} from "react-icons/ai"
import Image from "next/image"
import tolu from "../public/tolu.png"
import  design from "../public/design.png"
import  code from "../public/code.png"
import  consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web5.png"
import web5 from "../public/web6.png"
import web6 from "../public/web4.png"


export default function Home() {
const [darkMode,setDarkmode]= useState(false)
  return (
 <div className={darkMode ? "dark": ""}>
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900" >
    <section className="min-h-screen">
      <nav className="py-7 mb-10 flex justify-between">
        <h1 className="text-xl font-burtons dark:text-gray-400">

          Tolulope Ojo
        </h1>
        <ul className="flex items-center">
          <li><BsFillMoonStarsFill className="cursor-pointer text-2xl dark:text-gray-400" onClick={()=>setDarkmode(!darkMode)}/></li>
          <li><a className ="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"href="#">Resume</a></li>
        </ul>
      </nav>
      <div className="text-center p-6">
        <h2 className="text-5xl py-2 text-teal-600  font-small">Tolulope OJO</h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-400">Full Stack Software Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400">
          Software Developer with expertise
          in Nodejs, React, CI/CD, Microservices. Join me down below 
          and let's keep cracking.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-1 text-gray-600">
      <AiFillGithub/>
      <AiFillLinkedin/>
      <AiFillTwitterCircle/>
      <AiFillInstagram/>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
        <Image src={tolu} layout="fill" objectFit="cover"/>
      </div>
    </section>
    <section>
      <div>
       <h3 className="text-3xl mt-5 py-1">Services I offer</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
        Since the beginning of my career journey as a developer,
        I have worked for
      <span className="text-teal-500"> agencies </span>
      consulted for <span className="text-teal-500">
      startups </span>
        and collaborated with talented people to create
        digital products for both businesses and consumers.
      </p>
      <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-400">
       I offer wide range of services, including database management, API development both Restful and GraphQl APIs,
       and Frontend Integration.
      </p>
      </div>
      <div className="md:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400">
          <Image src={design} width={100} height={100} className="mx-auto"/>
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
          <p className="py-2">
          Creating elegant design suited for your needs
          </p>
          <h4 className="py-4 text-teal-600">Technologies I use</h4>
          <p className="text-gray-800 py-1">Html</p>
          <p className="text-gray-800 py-1">Css</p>
          <p className="text-gray-800 py-1">React</p>
          <p className="text-gray-800 py-1">Next</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400">
          <Image src={consulting} width={100} height={100} className="mx-auto"/>
          <h3 className="text-lg font-medium pt-8 pb-2">Backend Architecture</h3>
          <p className="py-2">
          Creating scalable backend structure suited for your needs
          </p>
          <h4 className="py-4 text-teal-600">Technologies I use</h4>
          <p className="text-gray-800 py-1">Javascript</p>
          <p className="text-gray-800 py-1">Typescript</p>
          <p className="text-gray-800 py-1">Nodejs</p>
          <p className="text-gray-800 py-1">Express</p>
        </div>
      
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400">
          <Image src={code} width={100} height={100} className="mx-auto"/>
          <h3 className="text-lg font-medium pt-8 pb-2">Topnotch database management</h3>
          <p className="py-2">
          Managing and optimising database structure
          </p>
          <h4 className="py-4 text-teal-600">Technologies I use</h4>
          <p className="text-gray-800 py-1">SQL</p>
          <p className="text-gray-800 py-1">NOSQL</p>
          <p className="text-gray-800 py-1">ORMs</p>
          <p className="text-gray-800 py-1">ODMs</p>
        </div>
        </div>
    </section>
    <section>
      <div>
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
        Since the beginning of my career journey as a developer,
        I have worked for
      <span className="text-teal-500"> agencies </span>
      consulted for <span className="text-teal-500">
      startups </span>
        and collaborated with talented people to create
        digital products for both businesses and consumers.
      </p>
      <p className="text-md py-2 leading-8 text-gray-800">
       I offer wide range of services, including database management, API development both Restful and GraphQl APIs,
       and Frontend Integration.
      </p>
      </div>
      <div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
          <Image src={web1} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1 ">
          <Image src={web2} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1 ">
          <Image src={web3} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1 ">
          <Image src={web4} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1 ">
          <Image src={web5} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
          <div className="basis-1/3 flex-1 ">
          <Image src={web6} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
          </div>
        </div>
      </div>
    </section>
    </main>
   </div>
  )
}
