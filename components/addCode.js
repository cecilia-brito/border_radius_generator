//muda o código que aparece para o usuário copiar de acordo com os valores passados pelo usuário
const addCode = () => {
    code.value = 'border-radius: ' +  document.getElementById('topLeft').value + borderMeasure.value + ' ' + document.getElementById('topRight').value + borderMeasure.value+ ' '+ document.getElementById('bottomLeft').value +borderMeasure.value+' ' + document.getElementById('topRight').value + borderMeasure.value + ';';
}

export default addCode;