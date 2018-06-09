var balloon=document.getElementById("balloon");

windowPageYOffset = 10000;

window.onscroll = function(){

  var fromTop = window.pageYOffset;
  balloon.innerHTML= fromTop+"px";

  balloon.style.top = fromTop * 1.02 + "px";

  balloon.style.transform="rotate("+ fromTop + "deg)"

  if(fromTop > 5000){
   balloon.style.transform="rotate(0 deg)"
   balloon.style.backgroundColor="red"
   balloon.innerHTML= "what a ride";

  } else{
    balloon.style.transform="rotate("+ fromTop + "deg)"

  }




};
