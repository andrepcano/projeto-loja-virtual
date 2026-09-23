import ProductCard from "./ProductCard";

const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">

            <ProductCard
                id={1}
                image="https://placehold.co/240x240/aa3bff/ffffff?text=Tenis"
                title="Tênis Esportivo"
                category="Calçados"
                rating={{ rate: 4.5 }}
                price="299,90"
                addToCart={addToCart}
            />

            <ProductCard
                id={2}
                image="https://placehold.co/240x240/3b82f6/ffffff?text=Fone"
                title="Fone de Ouvido Bluetooth"
                category="Eletrônicos"
                rating={{ rate: 4.8 }}
                price="149,90"
                addToCart={addToCart}
            />

            <ProductCard
                id={3}
                image="https://placehold.co/240x240/22c55e/ffffff?text=Mochila"
                title="Mochila para Notebook"
                category="Acessórios"
                rating={{ rate: 4.2 }}
                price="189,90"
                addToCart={addToCart}
            />

            <ProductCard
                id={4}
                image="https://placehold.co/240x240/f97316/ffffff?text=Relogio"
                title="Relógio Smartwatch"
                category="Eletrônicos"
                rating={{ rate: 4.7 }}
                price="349,90"
                addToCart={addToCart}
            />

        </div>
    );
};

export default ProductList;