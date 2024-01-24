const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')


let src = `https://jsonplaceholder.typicode.com/photos/${id}`;
let connection = new XMLHttpRequest();

connection.open("GET", src);
connection.send();


connection.onload = function() {
    const photo = JSON.parse(connection.responseText);

    

    const formElement1 = document.getElementById("albumId");
    formElement1.setAttribute("placeholder",`${photo.albumId}`)


    const formElement2 = document.getElementById("title")
    formElement2.setAttribute("placeholder",`${photo.title}`)
        
     if(localStorage) {
        document.getElementsByTagName("form")[0].addEventListener("submit",()=>{
            let albumId = document.getElementById("albumId").value;
            let title = document.getElementById("title").value;

            localStorage.setItem("id",id)
            localStorage.setItem("albumId",albumId)
            localStorage.setItem("title",title)            
        })
      
     }    
}