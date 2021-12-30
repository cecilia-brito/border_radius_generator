const changeBorder = () => {
        formExample.style.borderBottomLeftRadius = borderBottomLeft.value + borderMeasure.value;
        formExample.style.borderBottomRightRadius = borderBottomRight.value + borderMeasure.value;
        formExample.style.borderTopLeftRadius = borderTopLeft.value + borderMeasure.value;
        formExample.style.borderTopRightRadius = borderTopRight.value + borderMeasure.value;
}

export default changeBorder;