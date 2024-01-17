const theBox = document.getElementById("box");
theBox.addEventListener('mouseover', function() {
    theBox.style.backgroundColor = 'blue';
  });
  
  theBox.addEventListener('mousedown', function() {
    theBox.style.backgroundColor = 'red';
  });
  
  theBox.addEventListener('mouseup', function() {
    theBox.style.backgroundColor = 'yellow';
  });
  
  theBox.addEventListener('dblclick', function() {
    theBox.style.backgroundColor = 'green';
  });
  
  window.addEventListener('wheel', function() {
    theBox.style.backgroundColor = 'orange';
  });