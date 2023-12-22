function determinewinner(){
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomimagesource = "images/" + randomdiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);



var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage = randomnumber2 + ".png";
var randomimagesource = "images/dice" + randomdiceimage;
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="playea 1 won";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="playea 2 won";
}
else{
    document.querySelector("h1").innerHTML="draw";
}
}
var rollButton=document.getElementById("rollB")
rollB.addEventListener('click',determinewinner);