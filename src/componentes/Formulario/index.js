import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [valor, setValor] = useState('')
  const [imagem, setImagem] = useState('')
  const [categoria, setCategoria] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoProdutoCadastrado({
      nome,
      valor,
      imagem,
      categoria
    })
    setNome('')
    setValor('')
    setImagem('')
    setCategoria('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2 className='tituloFormulario'>Preencha os dados para criar o card do produto</h2>
        <div className='Campos'>
          <CampoTexto
            obrigatorio={true}
            label="Nome"
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)}
          />
          <CampoTexto
            obrigatorio={true}
            label="Valor"
            placeholder="Digite o valor"
            valor={valor}
            aoAlterado={valor => setValor(valor)}
          />
          <CampoTexto
            obrigatorio={true}
            label="Imagem"
            placeholder="Digite a url(link) da imagem"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
          />
          <ListaSuspensa
            obrigatorio={true}
            label="Categoria"
            itens={props.categorias}
            valor={categoria}
            aoAlterado={valor => setCategoria(valor)}
          />

          <div className='divExternaBtn'>
            <Botao>
              Criar Card
            </Botao>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Formulario