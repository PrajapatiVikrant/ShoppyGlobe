
export default function ProductItem({url,name,category,desc,price,discountPrice}){

    return (
        <article className="flex flex-col w-[300px] cursor-pointer justify-between shadow-2xl p-3">
            <section>

            <img src={url} alt="product Image" />
            <h1 className="text-3xl font-bold">{name.slice(0,25)}...</h1>
            <h2 className="text-xl text-blue-300">{category}</h2>
            <p className="text-2xl">{desc.slice(0,30)}...</p>
            <div className="flex gap-3">
            <del>${discountPrice}</del>
            <p>${price}</p>
            </div>
            </section>
                <section className="flex flex-col">
               <button className="bg-blue-800 text-[17px] mt-2.5 cursor-pointer text-white rounded p-1 hover:bg-blue-400">View Details</button>
               <button className="bg-blue-800 text-[17px] mt-2.5 cursor-pointer text-white rounded p-1 hover:bg-blue-400">Add to Cart</button>

                </section>
            
        </article>
    )
}