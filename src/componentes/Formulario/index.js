import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
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
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
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
            itens={props.times}
            valor={time}
            aoAlterado={valor => setTime(valor)}
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