var header = document.getElementById("stayActive");
var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function perform(a){


  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  if(a==1)
    document.getElementById("output").value = num1 + num2;

  if(a==2)
    document.getElementById("output").value = num1 - num2;

  if(a==3)
    document.getElementById("output").value = num1 * num2;

  if(a==4)
    document.getElementById("output").value = num1 / num2;
}
