import { useState, useEffect} from "react";
import "./ProductList.css";


export const ProductList = () => {

const [products, setProducts] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchProducts = async () => {
        try{
            const response = await fetch("https://api-ten-jet.vercel.app/products");
            if(!response.ok){
                throw new Error("Error loading products");
            }
            const data = await response.json();
            setProducts(data);
        }catch (err){
            setError(err.message);
        }
    }
    fetchProducts();
},[]);

  return (

    <section className="main-content">

        <main className="collections">
          <div className="options">
             <h2>ALL COLLECTIONS</h2>  
          </div>
           
           <div className="products">
            {error ? (
                <p className="error-message">{error}</p>
            ): (
                products.map((product) => (
                    <div className="product-card" key={product.id}>
                     <img src={product.image} alt={product.image} className="product-image"/>

                     <h3>{product.nombre}</h3>
                     <p>{product.precio}</p>
                    </div>
                ))
            )}

           </div>
        </main>
    </section>
  )
}
