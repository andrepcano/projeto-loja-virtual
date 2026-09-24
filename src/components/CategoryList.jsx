import CategoryCard from "./CategoryCard"

function CategoryList({ categories }) {
    return (
        <div className="category-list">

            <CategoryCard
            emoji="👕"
            name="Roupas"
            />

            <CategoryCard
            emoji="📱"
            name="Eletrônicos"
            />

            <CategoryCard
            emoji="👟"
            name="Calçados"
            />

            <CategoryCard
            emoji="🎒"
            name="Acessórios"
            />

        </div>
    )
}

export default CategoryList