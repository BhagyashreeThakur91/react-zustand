import { useEffect } from "react";
import useCounter from "../store/useCounter";

function Products() {
    const fetchProducts = useCounter(state => state.fetchListOfProducts);
    const productList = useCounter(state=> state.listOfProducts);

    useEffect(()=>{
        fetchProducts();
    },[])
    
    return (
        <div>
            <h2>List of Products</h2>
            <ul style={{display:'flex', flexWrap:'wrap'}}>
                {
                    productList?.length > 0 
                    ? productList.map((singleItem)=> <div key={singleItem.id}>
                        <p>{singleItem.title}</p>
                        <img src={singleItem?.thumbnail} alt={singleItem?.title} />
                    </div>)
                    : <h3>No products found!</h3>
                }
            </ul>

        </div>
    )
}
export default Products;