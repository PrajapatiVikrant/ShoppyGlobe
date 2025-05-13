import { useEffect, useState } from "react";
import useFatch from "../utils/useFatch"
import ProductItem from "../Components/SubComponent/Product/ProductItem";
import CategoryCheckbox from "../Components/SubComponent/Product/CategoryChedkbox";


export default function ProductList() {
    const { data, error, loading } = useFatch('https://dummyjson.com/products');
    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        function updateProductList() {
            const categories = data.map((product) => product.category);
            const uniqueCategory = categories.filter((category, index) => categories.indexOf(category) == index);
            setCategoryList(uniqueCategory)
            setProductList(data)
        }
        updateProductList();
    }, [data])



    return (
        <>
            {loading && <p className="text-3xl font-bold text-center w-[100%] h-[89vh] flex justify-center items-center">Product loading ....</p>}
            {error && <p className=" w-[100%] h-[89vh] flex justify-center items-center">{error} problem in loading</p>}
            <main className="flex">

                <section className=" w-[20%] p-3">
                    <h1 className=" text-2xl font-bold">{(loading || error) ? "" : "Product Category"}</h1>
                    <ul>
                        {categoryList.map((category) => <CategoryCheckbox category={category} />)}
                    </ul>
                </section>
                <section className="flex w-full flex-wrap gap-16 overflow-auto h-[80vh]  m-3 ">

                    {productList.map((product) => <ProductItem
                        name={product.title}
                        category={product.category}
                        desc={product.description}
                        price={product.price}
                        discountPrice={product.discountPercentage}
                        url={product.thumbnail} />)}
                </section>
            </main>
        </>
    )
}