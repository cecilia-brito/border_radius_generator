// import addCode from './components/addCode.js'

const changeBorder = () => {
    if(borderMeasure.value =='px' || borderMeasure.value=='pt' || borderMeasure.value=='cm' || borderMeasure.value=='mm' || borderMeasure.value=='pc' || borderMeasure.value=='em' || borderMeasure.value=='rem' || borderMeasure.value=='%' || borderMeasure.value=='ex' || borderMeasure.value=='ch' || borderMeasure.value=='vw' || borderMeasure.value=='vh'){
        formExample.style.borderBottomLeftRadius = borderBottomLeft.value + borderMeasure.value;
        formExample.style.borderBottomRightRadius = borderBottomRight.value + borderMeasure.value;
        formExample.style.borderTopLeftRadius = borderTopLeft.value + borderMeasure.value;
        formExample.style.borderTopRightRadius = borderTopRight.value + borderMeasure.value;
    } else{
        alert('Insira uma unidade de medida válida. Ex: rem, px, em, % ... ou insira valores positivos de border-radius');
    }
}

export default changeBorder;