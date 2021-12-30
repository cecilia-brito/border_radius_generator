//testa se usuário escolheu rem como unidade de medida e se sim deixa visível um
//checkbox perguntando sobre o font-size da página
// import changeBorder from './components/changeBorder.js'
const thisIsRem = () =>{

    const divCheck = document.getElementById('divCheck');
    let check = document.getElementById('forRem');
    const pageHtml = document.querySelector("html");

    if(borderMeasure.value != 'rem'){
        divCheck.classList.add("desactive");
    } else{
        divCheck.classList.remove("desactive");
    }

    //testa se o usuário marcou que quer usar o font-size da página como 62.5%, 
    //o que permite usar rem como unidade por todo documento já que o font-size
    //da página se torna 10px
    if(borderMeasure.value == 'rem' && check.checked){
        pageHtml.style.fontSize = 62.5 + '%'
    }
}

export default thisIsRem;