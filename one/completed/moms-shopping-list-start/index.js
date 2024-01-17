function createSubItem(){
    var newItem = document.createElement("li");
    const itemText = document.getElementById("title").value;
    
    var itemDiv = document.createElement("div");
    itemDiv.textContent = itemText;
        itemDiv.appendChild
    var editButton = document.createElement("button");
    editButton.textContent = "edit";

    var newDelete = document.createElement("button");
    newDelete.textContent = "X";

    newItem.appendChild(itemDiv)
    newItem.appendChild(editButton)
    newItem.appendChild(newDelete)
    
        var button = newItem.querySelectorAll('button');

        for(var i=0; i< button.length; i++){
                const deleteButton = button[i]
                if(deleteButton.innerHTML === "X"){
                    deleteButton.addEventListener('click', function(){
                    var listItem = deleteButton.parentNode;
                    listItem.remove();
                    })
                }
                
            }
            return newItem
        };
        
document.getElementById("add").addEventListener("click", function(event){
    event.preventDefault()
    const subItem = createSubItem()
    document.getElementById("list").appendChild(subItem)
    
})

var deleteButtons = document.querySelectorAll('button');

deleteButtons.forEach(function(button) {
    if (button.innerHTML === 'X') {
        button.addEventListener('click', function() {
            var listItem = button.parentNode;
            listItem.remove();
        });
    }
});
