const header = document.getElementById('header');
header.innerHTML = '<h1>Javascript Made This!!!</h1> <br> <p id=name>Jonathon</p> wrote the Javascript';

// const firstMes = document.querySelector('message left')
// firstMes.innerHTML.textContent = "this is the new message"

const leftMes = document.querySelectorAll('.left');
leftMes[0].textContent = 'something';
leftMes[1].textContent = 'and';
const rightMes = document.querySelectorAll('.right')
rightMes[0].textContent = 'fun';
rightMes[1].textContent = 'good';
