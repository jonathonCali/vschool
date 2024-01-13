function calc1(){
    let box1 = document.getElementById("input11").value;
    let box2 = document.getElementById("input12").value;
    let result = Number(box1) + Number(box2);
    document.getElementById("result1").value = result;
}
function calc2(){
    let box1 = document.getElementById("input21").value;
    let box2 = document.getElementById("input22").value;
    let result = Number(box1) - Number(box2);
    document.getElementById("result2").value = result;
}
function calc3(){
    let box1 = document.getElementById("input31").value;
    let box2 = document.getElementById("input32").value;
    let result = Number(box1) * Number(box2);
    document.getElementById("result3").value = result;
}