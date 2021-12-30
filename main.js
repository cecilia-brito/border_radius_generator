import addCode from '/editor_border_radius//components/addCode.js'
import changeBorder from '/editor_border_radius/components/changeBorder.js'
import thisIsRem from '/editor_border_radius/components/thisIsRem.js' 

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

borderTopRight.onkeyup = function changingBorder(){
    if(borderMeasure.value =='px' || borderMeasure.value=='pt' || borderMeasure.value=='cm' || borderMeasure.value=='mm' || borderMeasure.value=='pc' || borderMeasure.value=='em' || borderMeasure.value=='rem' || borderMeasure.value=='%' || borderMeasure.value=='ex' || borderMeasure.value=='ch' || borderMeasure.value=='vw' || borderMeasure.value=='vh'){
        changeBorder();
    } else{
        alert('Insira uma unidade de medida válida. Ex: rem, px, em, % ... ou insira valores positivos de border-radius');
    }
    console.log("rodou")
    addCode();
    thisIsRem()
};

borderBottomLeft.onkeyup = function changingBorder(){
    if(borderMeasure.value =='px' || borderMeasure.value=='pt' || borderMeasure.value=='cm' || borderMeasure.value=='mm' || borderMeasure.value=='pc' || borderMeasure.value=='em' || borderMeasure.value=='rem' || borderMeasure.value=='%' || borderMeasure.value=='ex' || borderMeasure.value=='ch' || borderMeasure.value=='vw' || borderMeasure.value=='vh'){
        changeBorder();
    } else{
        alert('Insira uma unidade de medida válida. Ex: rem, px, em, % ... ou insira valores positivos de border-radius');
    }
    console.log("rodou")
    addCode();
    thisIsRem()
};

borderBottomRight.onkeyup = function changingBorder(){
    if(borderMeasure.value =='px' || borderMeasure.value=='pt' || borderMeasure.value=='cm' || borderMeasure.value=='mm' || borderMeasure.value=='pc' || borderMeasure.value=='em' || borderMeasure.value=='rem' || borderMeasure.value=='%' || borderMeasure.value=='ex' || borderMeasure.value=='ch' || borderMeasure.value=='vw' || borderMeasure.value=='vh'){
        changeBorder();
    } else{
        alert('Insira uma unidade de medida válida. Ex: rem, px, em, % ... ou insira valores positivos de border-radius');
    }
    console.log("rodou")
    addCode();
    thisIsRem()
};


borderMeasure.onkeyup = function callThisIsRem(){
    thisIsRem();
}