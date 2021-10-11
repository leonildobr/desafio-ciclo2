window.onload = function () {
let dadoCep = async function(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let dadosFetch = await fetch(url)
    let
}

dadoCep('01001000')

// window.onload = function() {
//     function resultadoCep(datacep){
//         for(let campo in datacep){
//             if(document.querySelector(`#${campo}`)){
//                 document.querySelector(`#${campo}`).value=datacep[campo]
//             }
//         }
//     }

//     let dadosCep = async function(cep) {
//         let url = `https://viacep.com.br/ws/${cep}/json/`;
//         try {
//         let dadosFeth = await fetch(url);
//         let dadosJson = await dadosFeth.json();
//         resultadoCep(dadosJson)
//     } catch(error){
//         console.error("deu erro aqui")
//     }
//     }
//     // dadosCep('23454323')
//     const btnbuscar = document.querySelector('#buscarDados');
//     const Cep = document.querySelector('#cep')
//     btnbuscar.addEventListener('click', function(){
//     dadosCep(Cep.value)
//     })
// }

}