import Produto from '../Produto'
import './Categoria.css'

const Categoria = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.produtos.length > 0) ? <section className='categoria' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='produtos'>
                {props.produtos.map( produto => <Produto corDeFundo={props.corPrimaria} key={produto.nome} nome={produto.nome} valor={produto.valor} imagem={produto.imagem}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Categoria