var height = prompt("請輸入身高(cm):");
var weight = prompt("請輸入體重(kg):");
document.write("<h1>身高: "+ height + "cm</h1>");
document.write("</br>");
document.write("<h1>體重: "+ weight + "kg</h1>");
document.write("</br>");
var h = height/100;
var bmi = weight/(h*h);
document.write("<h1>BMI: "+ bmi + "</h1>");

