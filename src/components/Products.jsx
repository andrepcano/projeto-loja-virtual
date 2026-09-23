import ProductCard from "./ProductCard"
import ProductList from "./ProductList"

const Products = ({ setCart }) => {

    const addToCart = () => {
        setCart((prev) => prev + 1) // Para adicionar toda vez que clicar no botao
    }

    return(
        <section id="produtos" className="products">
            <h2>Produtos em destaque</h2>

                <ProductList addToCart={addToCart} />
        </section>
    );
}

export default Products