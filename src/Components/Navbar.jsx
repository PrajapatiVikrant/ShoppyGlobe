import { useState } from "react"
import Cart from "./SubComponent/Cart/Cart";

export default function Navbar(){
    const [home,setHome] = useState(true)
    const [product,setProduct] = useState(false)

    function handleClick(navItemName){
        if(navItemName === "home"){
            setHome(true);
            setProduct(false)
        }else{
             setHome(false);
            setProduct(true)
        }
    }
    

    return (
        <nav className="flex items-center text-2xl text-white bg-black justify-between p-3 px-7">
            <section className="font-bold  text-3xl">
                <span >ShoppyGlobe</span>
            </section>
            <section>
                <ul className="flex gap-11">
                    <li className={`cursor-pointer  ${home?"border-t-2":"border-none"} `} onClick={()=>handleClick("home")}>Home</li>
                    <li className={`cursor-pointer  ${product?"border-t-2":"border-none"}`} onClick={()=>handleClick("product")}>Product</li>
                   <li className="cursor-pointer"><Cart/></li>
                </ul>
            </section>

        </nav>
    )
}