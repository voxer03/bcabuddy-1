function off(){
    document.body.style.background = "white";
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'
    document.body.style.color = "black";
    document.getElementById('nav').style.background= "darkcyan"; 

}


function on(){
  document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif'
  document.body.style.background = "black";
  document.body.style.color="cyan";
  document.getElementById('nav').style.background= "darkorange"; 



}
