/*const btinserir = document.querySelector('[data-inserir]')

btinserir.addEventListener('click' , () => {
    const input = document.querySelector('[data-input]')
    const valor = input.value

const paragrafo = document.createElement('p')
paragrafo.innerText = valor
paragrafo.classList.add('d-inline')
paragrafo.classList.add('me-4')


const btnconcluir = document.createElement('button')
btnconcluir.innerText = "concluir"
btnconcluir.classList.add('btn')
btnconcluir.classList.add('me-4')
btnconcluir.classList.add('btn-success')

const btndeletar = document.createElement('button')
btndeletar.innerText = "deletar"
btndeletar.classList.add('btn')
btndeletar.classList.add('me-4')
btndeletar.classList.add('btn-outline-danger')


const itemlista = document.createElement('li')
itemlista.appendChild(paragrafo)
itemlista.appendChild(btnconcluir)
itemlista.appendChild(btndeletar)

  const lista = document.querySelector('[data-list]')
  lista.appendChild(itemlista)

})*/

 const btinserir = document.querySelector('[data-inserir]')

 btinserir.addEventListener('click' , () =>{
     const input = document.querySelector('[data-input]')
     const valor = input.value 

     const paragrafo = document.createElement('p')
     paragrafo.innerText = valor
     paragrafo.classList.add('d-inline')
     paragrafo.classList.add('me-4')

     const concluir = document.createElement('button')
     concluir.innerText= "conluir"
     concluir.classList.add('btn')
     concluir.classList.add('me-4')
     concluir.classList.add('btn-success')

     const deletar = document.createElement('button')
     deletar.innerText= "deletar"
     deletar.classList.add('btn')
     deletar.classList.add('me-4')
     deletar.classList.add('btn-outline-danger')

  const item = document.createElement('li')
  item.appendChild(paragrafo)
  item.appendChild(concluir)
  item.appendChild(deletar)

const lista = document.querySelector('[data-list]')
lista.appendChild(item)

     
 })