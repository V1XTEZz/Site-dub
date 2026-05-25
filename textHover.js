const image = 
      document.getElementById("JAImg");
const text = 
      document.quetySelector(".JATxt");

function hoverOn() {
    image.style.width = "23%";
    image.style.filter = "blur(2px) brightness(0.7)";
}
function hoverOff() {
    image.style.width = "20%";
    image.style.filter = "blur(0px) brightness(1)";
}
