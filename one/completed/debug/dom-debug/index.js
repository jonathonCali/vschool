colors = ["red", "blue", "green"]


document.getElementById("add").addEventListener("click", function(){
    const subItem = createSubItem()
    
    document.getElementById("list").appendChild(subItem)
    
})

function createSubItem(){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value
    console.log(subItemValue)
    subItem.textContent = subItemValue
    const dropDown = createDropDown(subItem)
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}

function createDropDown(div){
    const dropDown = document.createElement("select")

    const defOpt = document.createElement("option")
    defOpt.text = ""
    defOpt.value = ""
    dropDown.appendChild(defOpt)

    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.textContent = colors[i]
        option.value = colors[i]
        dropDown.appendChild(option)
    }
    dropDown.addEventListener("change", function(e){
        div.style.backgroundColor = e.target.value
        
    })
    return dropDown
}






