function hello()
{
    document.write("hello world.</br>");
}
function SayHi(name, age)
{
    document.write("hello "+name+"</br>");
    document.write("age:"+age+"</br>");
}

var names = ['Peter','Lopez', 'Alex'];
for(i=0; i<3; i++)
{
    SayHi(names[i], 6+6*i);
}