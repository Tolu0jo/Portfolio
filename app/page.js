import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram} from "react-icons/ai"
import Image from "next/image"
import tolu from "../public/tolu.jpeg"
export default function Home() {
  return (
    <main className="bg-white px-10">
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons">

          Tolulope Ojo
        </h1>
        <ul className="flex items-center">
          <li><BsFillMoonStarsFill className="cursor-pointer text-2xl "/></li>
          <li><a className ="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"href="#">Resume</a></li>
        </ul>
      </nav>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-small">Tolulope Ojo</h2>
        <h3 className="text-2xl py-2">Full Stack Software Developer</h3>
        <p className="text-md py-5 leading-8 text-gray-800">
          Software Developer with expertise
          in Nodejs, React, Nextjs. Join me down below 
          and let's keep cracking.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
      <AiFillLinkedin/>
      <AiFillTwitterCircle/>
      <AiFillInstagram/>
      </div>
      <div>
        <Image/>
      </div>
    </section>
    </main>
  )
}
