let divObj = document.getElementById("myDiv");
  
divObj.onmouseover = function() {
  this.style.background = 'yellow';
};

divObj.onmouseout = function() {
  this.style.background = 'white';
};