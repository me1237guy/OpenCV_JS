var title = document.getElementById("title");
var content = document.getElementById("content");
var list = document.getElementById("list");
var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    // document.write(title.innerHTML);
    // console.log(title.value);
    // console.log(content.value);
    // console.log(list.innerHTML);
    /* 
        模板語法:   
        ` ${js語法}   `
    */
    list.innerHTML = list.innerHTML + `
    <div class="article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
    </div>
    `
    title.value = "";
    content.value = "";
});
