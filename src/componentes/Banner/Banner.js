import './Banner.css'

export const Banner = () => {
    // JSX
    return (
        <header className="banner">
            <div className='divExternaBanner'>
                <div className='textosBanner'>
                    <p className='tituloBanner'>E-commerce Blooby</p>
                    <p className='subtituloBanner'>Diversos produtos em um só lugar!</p>
                    <p className='observacoes'>Site em construção! Melhorias em breve</p>
                </div>
                <img src='/imagens/ilustracaoLoja.svg' alt='ilustração de loja virtual' className='ilustracaoBanner'></img>
            </div>
        </header>
    )
}