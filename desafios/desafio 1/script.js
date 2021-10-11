window.onload = function (){
    let frutas = [
        {
            fruta: "Banana Nanica",
            preco: 3.89
        },
        {
            fruta: "Laranja Lima",
            preco: 5.79
        },
        {
            fruta: "Abacaxi Hawai",
            preco: 17.90
        },
        {
            fruta: "Graviola",
            preco: 12.99
        },
        {
            fruta: "kiwi importado",
            preco: 26.79
        },
    ]
    let catalogo = frutas[0].fruta
    const produtos = document.querySelector("#produtos");
    
    //lista dinâmica
    (()=>{
    
        for(let frt of frutas){
            
            const listLi = document.createElement('li');
             for(listaF in frt){
                 if (listaF == 'preco'){
                    produtos.appendChild(listLi).setAttribute('data-preco', frt[listaF])
                 } else {
                    produtos.appendChild(listLi).textContent = `${frt[listaF]}`;
                }
                
            }
        }
    
    })()
    
    const addfruta = document.querySelectorAll('#produtos > li')
    const cestaDoCliente = document.querySelector("#cestaDoCliente")
    const todaCestaCliente = document.querySelectorAll("#cestaDoCliente")
    const cestaCliente = []
    
    addfruta.forEach(function(list){
        list.addEventListener('click', function(elemento){
 
        if( cestaCliente.indexOf(list.textContent) != -1){
            alert(`a fruta ${elemento.target.innerHTML} já está no carrinho`)           
            } else {   
            let listLiCliente = document.createElement('li');
            const pro = document.querySelector(`#produtos > li`)
            const cesta = document.querySelector(`#cestaDoCliente > li`)
            cestaCliente.push(list.textContent)
            console.log(cestaCliente)
        for(let frt of frutas){        
            for(let listaF in frt){
                    if (listaF == 'preco'){
                        cestaDoCliente.appendChild(listLiCliente).setAttribute('data-preco', frt[listaF])
                    } else {
                        cestaDoCliente.appendChild(listLiCliente).textContent = elemento.target.innerHTML;
                    }
                }
            }
        }
        
        //funcção calcular total
        //NÃO MEXER
        function calculo (idProduto, resultado){
            const preco = document.querySelectorAll(`#${idProduto} > li`);
            const valorResultado = document.querySelector(`#${resultado}`);
            let T = 0;
            
            for (let i of preco) {
                T += Number(elemento.target.dataset.preco)
                //um certo alguem ficou triste
            //  console.log(elemento.target.dataset.preco)
            }
            valorResultado.value = T;
        }
    
        function removeFruta(id){
            const lista = document.querySelectorAll(`#${id} > li`);
            lista.forEach(function(lista){
                // for (let produto of lista) {
                    lista.addEventListener('click', function(){
                        lista.remove();
                        cestaCliente.pop(lista.textContent)
                        console.log(cestaCliente)
                        calculo('cestaDoCliente','mostraTotalCompra');
                    })
                //}
        
            })
        
        }
        removeFruta('cestaDoCliente');
        calculo('cestaDoCliente','mostraTotalCompra');
        })
    })
    
    
    } //não remover