# generator_border_radius

Tabela de conteúdos
=================
<!--ts-->
   * [Descrição do projeto](#descrição-do-projeto)
   * [Status](#status)
   * [Desenvolvimento](#desenvolvimento)
   * [Resultado](#resultado)
   * [Tecnologias Utilizadas](#tecnologias-utilizadas)
   * [Author](#author)
<!--te-->

## 📝Descrição do Projeto

<p>Gerador de border radius online. O usuário pode colocar os valores de cada border radius, escolher a unidade de medida e visualizar o resultado na figura, além de copiar o código</p>

## 🕗Status

<p>Em andamento...🚀</p>

<ul>
  <li>[ ]Acessibilidade Web</li>
  <li>[Ok] Botão de copiar para área de transferência</li>
  <li>[Ok] Validar se a unidade de medida fornecida pelo usuário é válida </li>
  <li>[ ]Validar se o valor do border radius fornecido pelo usuário é válido</li>
</ul>

## 💻Desenvolvimento 

<p>Em um primeiro momento foi desafiador, mas depois foi muito satisfatório ver minha evolução e também o que eu preciso melhorar principalmente em relação aos escopos do JS.</p>

<p>Eu tinha desenvolvido todo o código em JavaSript puro e apenas no escopo global, mas decidi dividir ele por módulos para retirar o acesso do usuário a maior parte da minha regra de negócio. O código ficou divido em três componentes: addCode.js, changeBorder.js e thisIsRem.js, além do arquivo main.js. No quesito CSS e HTML também trabalhei com eles puros e acredito que não tenha necessidade discorrer muito sobre, já que estão bem simples.</p>

###

```
import addCode from './components/addCode.js'
import changeBorder from './components/changeBorder.js'
import thisIsRem from './components/thisIsRem.js' 

borderTopLeft.onkeyup = function changingBorder(){
    if(borderMeasure.value =='px' || borderMeasure.value=='pt' || borderMeasure.value=='cm' || borderMeasure.value=='mm' || borderMeasure.value=='pc' || borderMeasure.value=='em' || borderMeasure.value=='rem' || borderMeasure.value=='%' || borderMeasure.value=='ex' || borderMeasure.value=='ch' || borderMeasure.value=='vw' || borderMeasure.value=='vh'){
        changeBorder();
    } else{
        alert('Insira uma unidade de medida válida. Ex: rem, px, em, % ... ou insira valores positivos de border-radius');
    }
    console.log("rodou")
    addCode();
    thisIsRem()
};
```
###

<p>No main.js eu importei os components — boa parte das variáveis e constantes eu declarei no escopo global, acredito que não seja a melhor forma, quero mudar isso em breve —usei o evento "onkeyup" para ativar uma função, no caso essa função testaria se o usuário digitou uma unidade de medida válida, depois chamaria o componente changeBorder</p>

```
const changeBorder = () => {
        formExample.style.borderBottomLeftRadius = borderBottomLeft.value + borderMeasure.value;
        formExample.style.borderBottomRightRadius = borderBottomRight.value + borderMeasure.value;
        formExample.style.borderTopLeftRadius = borderTopLeft.value + borderMeasure.value;
        formExample.style.borderTopRightRadius = borderTopRight.value + borderMeasure.value;
}

export default changeBorder;
```

###
<p>O componente changeBorder é responsável por mudar os valores do border radius de acordo com o valor que está no input e de acordo com a medida passada pelo usuário. Eu declarei uma arrow function e ela, quando chamada, deve mudar o valor de borde -radius do elemento "formExample", que é a figura. Por fim na última linha eu exportei o componente</p>

<p>Voltando para o arquivo main.js depois que changeBorder() for executada</p>

###

```
import addCode from './components/addCode.js'
import changeBorder from './components/changeBorder.js'
import thisIsRem from './components/thisIsRem.js' 

borderTopLeft.onkeyup = function changingBorder(){
    if(borderMeasure.value =='px' || borderMeasure.value=='pt' || borderMeasure.value=='cm' || borderMeasure.value=='mm' || borderMeasure.value=='pc' || borderMeasure.value=='em' || borderMeasure.value=='rem' || borderMeasure.value=='%' || borderMeasure.value=='ex' || borderMeasure.value=='ch' || borderMeasure.value=='vw' || borderMeasure.value=='vh'){
        changeBorder();
    } else{
        alert('Insira uma unidade de medida válida. Ex: rem, px, em, % ... ou insira valores positivos de border-radius');
    }
    console.log("rodou")
    addCode();
    thisIsRem()
};
```
###

<p>Voltando para o arquivo main.js depois que changeBorder(), caso aquela primeira condição não seja verdadeira irá entrar no bloco do else e irá aparecer um "alert" para o usuário advertindo para que ele use uma unidade de medida válida e alguns exemplos dessas. Depois do bloco do if/else as funções dos outros dois componentes serão executadas </p>

<p>Quando o addCode é chamado ele executa o seguinte código:</p>

```
const addCode = () => {
    code.value = 'border-radius: ' +  document.getElementById('topLeft').value + borderMeasure.value + ' ' + document.getElementById('topRight').value + borderMeasure.value+ ' '+ document.getElementById('bottomLeft').value +borderMeasure.value+' ' + document.getElementById('topRight').value + borderMeasure.value + ';';
}

export default addCode;
```
<p>Ele basicamente muda o valor do input que exibe o código da propriedade border radius para os valores capturados pelos inputs que pegam a unidade de medida e que pegam os valores</p>

<p>Depois do addCode() ser executado o próximo será o thisIsRem()</p>

````
    const divCheck = document.getElementById('divCheck');
    let check = document.getElementById('forRem');
    const pageHtml = document.querySelector("html");

    if(borderMeasure.value != 'rem'){
        divCheck.classList.add("desactive");
    } else{
        divCheck.classList.remove("desactive");
    }

    if(borderMeasure.value == 'rem' && check.checked){
        pageHtml.style.fontSize = 62.5 + '%'
    }
}

export default thisIsRem;
````

<p>Eu declarei o elemento checkbox e a div que ele está aninhado e também declarei a tag html, depois eu testei se a unidade de medida era difernte de 'rem', se fosse, a div receberia a class 'desactive' que mudaria a propriedade visibily dela para hidden, caso a unidade de medida fosse rem essa classe seria removida o que deixaria essa div visível e consequentemente o checkbox também</>
  
<p>No segundo if eu verifico novamente se a unidade de medida é 'rem', mas eu também verifico se o checkbox está 'checked', se as duas condições forem verdade o font size da tag html será de 62.5%(eu acho isso muito útil para quando for usar rem)</p>
  
<p>As próximas linhas do arquivo main.js seguem essa mesma lógica todos os inputs que pegam borders radius. Apenas irei reforçar que a maior parte das variáveis está declarada no escopo global, assim como a função copyCode() que é acionada quando o usuário clica no botão de copiar. </p>

<p>Ainda há muito o que melhorar 🚀</p>

## ☄Resultado

<p>A página está hospedada no Github Pages, <a href='https://cecilia-brito.github.io/loading_bar/'>aqui</a></p>

## 💡Tecnologias Utilizadas
<a href='https://developer.mozilla.org/pt-BR/docs/Web/HTML'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='logo do HTML em laranja' width ='60' height='60'/></a><a href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='logo do CSS em azul'  width ='60' height='60'/></a><a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='logo do JavaScript em amarelo'  width ='60' height='60' /></a>


## 🌼Author

<p align='center'><a href="https://www.linkedin.com/in/cec%C3%ADlia-brito-santos-a22193170/">Código feito por Cecília Brito</a></p>
