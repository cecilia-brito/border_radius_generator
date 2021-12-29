let borderBottomRight = document.getElementById('selector-border-bottom-right');
let borderBottomLeft = document.getElementById('selector-border-bottom-left');
let borderTopRight = document.getElementById('selector-border-top-right') ;
let borderTopLeft = document.getElementById('selector-border-top-left');
let formExample = document.getElementById('element-example');
let borderRadius = 0;

function calcBorderRadius(){

}

function changeBorder(){
    formExample.style.borderBottomLeftRadius = borderRadius + '%';
    formExample.style.borderBottomRightRadius = borderRadius + '%';
    formExample.style.borderTopLeftRadius = borderRadius + '%';
    formExample.style.borderTopRightRadius = borderRadius + '%';
}

