import './Produto.css'

//Outra forma de fazer sem usar o props
const Produto = ({ nome, imagem, valor, corDeFundo }) => {
    return (<div className='produto'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{valor}</h5>
        </div>
    </div>)
}

export default Produto