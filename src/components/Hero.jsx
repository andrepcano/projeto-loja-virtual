const Hero = (props) => {
    return (
        <section className="banner">
            <div className="banner-text">
                <h1>{props.titulo}</h1>
                <p>{props.subtitulo}</p>
                <button className="btn-primary">{props.textoBotao}</button>
            </div>
            <img className="banner-image" src={props.imagem} alt="Banner de promoção da loja" />
        </section>
    )

}

export default Hero