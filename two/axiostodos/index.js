

axios.get("https://api.vschool.io/joncali/todo") //use axios to pull api
.then(response => { //after axios is called
    for(let i = 0; i < response.data.length; i++){ //for every response datum in the api
        const container = document.createElement('div'); //element created, <div>
            container.id = 'item-box'; //giving above id
        const itemId = response.data[i]._id //grabbing each [i]'s unique api ._id 
        const description = document.createElement('p'); //create element, <p>
        description.id = 'itemDescription' //give above id
        const h2 = document.createElement('h2') //element, <h2>
        h2.id = 'itemTitle' //above div id
        const price = document.createElement('p2') //element <p2>
        price.id = 'itemPrice' //give above element id
        const statustxt = document.createElement('label'); // created <label>
        statustxt.id = 'statustxt' //above given id
        const checkbox = document.createElement('input'); //element created <input>
        checkbox.type = 'checkbox'; //type is 'checkbox'
        checkbox.id = 'checkbox' //id given to above
        const deleted = document.createElement('button') //<button> created
        deleted.id = "deleted" //id given to above
        const image = document.createElement('img') //<img/> created
        image.src = response.data[i].imgUrl //source of image will be each specific id's 'imgUrl' element
        image.id = 'image' //img given id 
        image.onerror = function(){ //if image doesn't load, call function
            image.alt = 'Image Unavailable' //display image alternative, text
        }

        h2.textContent = `Title: ${response.data[i].title}` //<h2>text content with 'title' element
        description.textContent = `Description: ${response.data[i].description}`//text content like above
        price.textContent = `Price: ${response.data[i].price}`//text content like above
        statustxt.textContent = `Done with ${response.data[i].title}? `//text content like above
        deleted.textContent = `Delete ${response.data[i].title}?`//text content like above
        
        deleted.addEventListener('click', function(){//deleted is a button, when it is clicked call function
            
                axios.delete(`https://api.vschool.io/joncali/todo/${itemId}`) //execute axios delete for specific array button was on
                .then(response => { //what will happen when api deletes the array
                    console.log(this.removeChild) //remove this child (the entire array)
                    console.log(response.data); //log this to console
                    window.location.reload() //reload entire page
            })//end of axios .then response
            .catch(error => console.log(error))//log error to console         
    })//end of delete function
        
    checkbox.addEventListener('change', function() { //checkbox addevenlistener, when it (the checkbox) is changed in any way, call function
        if (this.checked) { //if one specific checkbox is checked
            h2.style.textDecoration = 'line-through';//its corresponding eponimous </h2> will get a line thru it via textdecoration      
            description.style.textDecoration = 'line-through'; //same for its p description element
            axios.put(`https://api.vschool.io/joncali/todo/${itemId}`, {completed: true }) //run axios for specific array, change completed var to true
                .then(response => {console.log(`Completed ${response.data.title} = true`);}) //after axios runs, log 'completed (array title) = true'
                    } else { //if said checkbox is changed, but not checked
                    h2.style.textDecoration = 'none'; //no changes to text
                    description.style.textDecoration = 'none'; //no changes to text
                    axios.put(`https://api.vschool.io/joncali/todo/${itemId}`, {completed: false }) //axios run, change completed to false
                    .then(response => {console.log(`Completed ${response.data.title} = false`);})//after axios runs, log 'completed (array title) = false'
        }
    });

    container.appendChild(h2); //attatch to variable container, item-box div
    container.appendChild(price);//price appends to container
    container.appendChild(description);//description appends to container
    container.appendChild(checkbox);//checkbox appends to container
    checkbox.appendChild(statustxt);//append statustxt var to checkbox var
    container.appendChild(statustxt) //attatch statustxt var to container var too
    container.appendChild(deleted)//deleted appends to container
    container.appendChild(image) //image appends to container
    document.getElementById('todo-list').appendChild(container)//append container to html element 'todo-list'
    }
    
})
.catch(error => console.log(error)); //catch error send to dom

document.getElementById('submit').addEventListener('click', function(e){ //on buttonclick, begin function of click
    e.preventDefault(); //prevent reload

    const newTodo = { //new var
        title: document.getElementById('titleInput').value, //title grabs from <input id=titleInput/>
        description: document.getElementById('description').value,//description grabs from eponimous input
        price: document.getElementById('price').value,//price is gotten from eponimous input
        imgUrl: document.getElementById('imgUrl').value,//vars title is gotten from <input id=titleInput/>
        completed: false //defaults to false
    }

    axios.post("https://api.vschool.io/joncali/todo", newTodo) //axios post var to api
    .then(response => { //after axios new func called
        console.log(response.data); //response data logged to dom
        window.location.reload(); //reload the site for updated api
    })//end of .then
    .catch(error => console.log(error)); //log error to console
})



