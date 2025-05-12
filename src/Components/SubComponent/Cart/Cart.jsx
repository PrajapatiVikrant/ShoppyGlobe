import { BsCart4 } from "react-icons/bs";
export default function Cart(){
    
    return (
      <section className="flex flex-col-reverse relative bottom-1.5 items-center ">
        <BsCart4/>
        <span className=" text-[14px] relative top-1 text-2xl">0</span>
      </section>
    )
}