
function clickDisplay(){//calls new function clickDisplay
    let count = document.getElementById('click-display').textContent //html element click-display named count here
    count++ //increase count's count, which is 0 in the html
    document.getElementById('click-display').textContent = count //whatever the increased count is, is the new count/'click display' displayed
    localStorage.setItem('clickCount', count) //new variable, clickCount, set to localstorage and its value is count
}
document.getElementById('click-display').textContent = localStorage.getItem('clickCount') //retrieves item from localStorage named clickCount, and click-display's number is changed to it's value
document.addEventListener('click', clickDisplay); //every time a click occurs, clickDisplay function is executed.
