import { useState } from 'react';
import './reset.css';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';
import Rodape from './componentes/Rodape';


function App() {

  const categorias = [
    {
      nome: 'Alimentos e bebidas',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Vestuário',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Eletrônicos',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Acessórios',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Calçados',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Móveis e decoração',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Papelaria',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [produtos, setProdutos] = useState([])

  const aoNovoProdutoAdicionado = (produto) => {
    // debugger
    setProdutos([...produtos, produto])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoProdutoCadastrado={produto => aoNovoProdutoAdicionado(produto)}/>

      {categorias.map(categoria => <Categoria 
        key={categoria.nome} 
        nome={categoria.nome} 
        corPrimaria={categoria.corPrimaria} 
        corSecundaria={categoria.corSecundaria} 
        produtos={produtos.filter(produto => produto.categoria === categoria.nome)}
      />)}   

      <Rodape/>
    </div>
  );
}

export default App;
