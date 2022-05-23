var scores = [1,2,3,4];
document.write(scores);
document.write("</br>");
var data = ['Ryan',80, true];
document.write(data);
document.write("</br>");
document.write("length: "+ data.length);
var x = [[1,2,3],[4,5,6],[7,8,9],[10]]
document.write(x);
document.write("</br>");
document.write("x's length: "+ x.length);
document.write("</br>");
for(i=0;i<x.length;i++)
{
    for(j=0;j<x[i].length;j++)
    {
        document.write(x[i][j]+" ");
    }
    document.write("</br>");
}

