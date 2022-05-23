var btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
    // alert("叫你按就按啊?!");
// });
btn.addEventListener("click",function(){
    this.innerHTML = "按屁啊!";
    this.style.color="red";
});
var img = document.getElementById("img");
img.addEventListener("mouseover",function(){
    this.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNPnKDSwFKgg64E0ayhIjj6hBMXrYH36XxQ&usqp=CAU";
});
img.addEventListener("mouseleave",function(){
    this.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB_4qgMOKCB8aknzxQJ_uUQuZsEA-nrU27A&usqp=CAU";
});
