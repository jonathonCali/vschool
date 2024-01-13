



function updateTotal() {
    let box1 = document.getElementById("goomba").value;
    let box2 = document.getElementById("bomb").value;
    let box3 = document.getElementById("cheep").value;
    let result = Number(box1) + Number(box2) + Number(box3)

    document.getElementById("total").textContent = result;
}