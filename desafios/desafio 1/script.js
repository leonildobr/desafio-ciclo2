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
    
    const addfruta = document.querySelectorAll('#produtos')
    const cestaDoCliente = document.querySelector("#cestaDoCliente")
    const todaCestaCliente = document.querySelectorAll("#cestaDoCliente")
    // console.log(addfruta);
    // console.log(cestaDoCliente)
    
    addfruta.forEach(function(list){
        list.addEventListener('click', function(elemento){
        let listLiCliente = document.createElement('li');
    
    
        // cestaDoCliente.appendChild(listLiCliente).textContent = elemento.target.innerHTML;
     //if (elemento == todaCestaCliente.innerHTML)
        for(let frt of frutas){        
            for(listaF in frt){
                if (listaF == 'preco'){
                    cestaDoCliente.appendChild(listLiCliente).setAttribute('data-preco', frt[listaF])
                } else {
                    cestaDoCliente.appendChild(listLiCliente).textContent = elemento.target.innerHTML;
                }
                
            }
        }
        
        //funcção calcular total
        function calculo (idProduto, resultado){
            const preco = document.querySelectorAll(`#${idProduto} > li`);
            const valorResultado = document.querySelector(`#${resultado}`);
            let T = 0;
            
            for (let i of preco) {
                T += Number(elemento.target.dataset.preco)
                //um certo alguem ficou triste
             console.log(i.dataset.preco)
            }
            valorResultado.value = T;
        }
    
        function removeFruta(id){
            const lista = document.querySelectorAll(`#${id} > li`);
            for (let produto of lista) {
                produto.addEventListener('click', function(){
                    produto.remove();
                    calculo('cestaDoCliente','mostraTotalCompra');
                })
            }
        }
        removeFruta('cestaDoCliente');
        calculo('cestaDoCliente','mostraTotalCompra');
        })
    })
    
    
    } //não remover