const produtos = [
    { id: 1, nome: 'Caneta', preco: 2.5 },
     { id: 2, nome: 'Caderno', preco: 25 }, 
     { id: 3, nome: 'Lápis', preco: 1.2 }]

     //Exercício 1
     const nomes = produtos.map(u => u.nome)

     console.log(nomes);

     //Exercício 2
     const precomaior = produtos.filter(n => n.preco > 5)

     console.log(precomaior);

     //Exercício 3
     const precocinco = produtos
     .filter(p => p.preco <= 5)
     .map (p => p.nome)

     console.log(precocinco);

     //Exercício 4
     async function buscarProduto(id) {
return new Promise ((resolve) => {
    setTimeout(() => {

        const resultado = produtos.find(p => p.id === id)
        resolve(resultado)
    }, 300)
})
}

async function executarBusca(){
    const produtoEncontrado = await buscarProduto(2)
    console.log(produtoEncontrado)
}
     
//Autoavaliação

//Marque ✅ quando conseguir responder **sim** sem consultar:

- [x]  Eu sei a diferença entre `map`, `filter` e `find` sem hesitar.
- [ ]  Eu explico por que `map` precisa de `key` ao renderizar listas no React.
- [ ]  Eu descrevo o que é uma `Promise` em JavaScript.
- [x]  Eu sei quando usar `async/await` em vez de `.then`.
- [ ]  Eu consigo abrir o Vite+React, editar `App.jsx` e ver a mudança no navegador.
- [ ]  Eu reconheço o erro `Cannot read X of undefined` e sei que provém de `find` ou de prop não carregada.

//

//Não sei fazer o exercício