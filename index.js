let ul = document.querySelector(".ul");
let Prev = document.querySelector(".Prev");
let Next = document.querySelector(".Next");
let currentpage = 3;
let totalpage = 10;
let active_page ="";

create_page(currentpage);

function create_page(currentpage){
    ul.innerHTML= "";
    for (let i = currentpage -2; i <= currentpage + 2; i++) {
        if(currentpage== i)
        {
             active_page = "active_page"
        }
        ul.innerHTML +=`<li><a href="#" class="page-number`+ active_page+`">`+i+`</a></li> `;
    }
} 