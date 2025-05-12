import {  useState } from "react"
import './Intro.css'

export default function Intro() {
   
   
    

    return (
        <section  className='introCtn z-0  h-[80vh] bg-cover bg-center'>
           <section className="h-[80vh] text-white  bg-black opacity-70 z-10 p-20" >
             <h1 className=" text-6xl font-bold">Welcome to <span className="text-yellow-400">ShoppyGlobe</span></h1> 
             <p className="text-2xl p-2">Your Ultimate Shopping Destination!</p>
              <button className="cursor-pointer bg-red-800 p-2 text-3xl rounded-xl px-3 m-1.5 mt-6 hover:bg-red-400">Shop Now</button>     
           </section>
        </section>
    )
}