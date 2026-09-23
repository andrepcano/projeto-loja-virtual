function CategoryList({ categories }) {
    return (
        <div className="category-list">
            <div className="category-card">
                <span className="category-icon">👕</span>
                <p>Roupas</p>
            </div>

            <div className="category-card">
                <span className="category-icon">📱</span>
                <p>Eletrônicos</p>
            </div>

            <div className="category-card">
                <span className="category-icon">👟</span>
                <p>Calçados</p>
            </div>

            <div className="category-card">
                <span className="category-icon">🎒</span>
                <p>Acessórios</p>
            </div>
        </div>
    )
}

export default CategoryList