let src = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100";
let connection = new XMLHttpRequest();

connection.open("GET", src);

connection.send();

connection.onload = function() {
    const photos = JSON.parse(connection.responseText);
    const cardsElement = document.getElementById("cards");
    
    
    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        
         
        const cardElement = document.createElement("div");
        cardElement.classList.add("card")
        cardElement.style.width = "18rem"
        cardsElement.appendChild(cardElement);

        const imgElement = document.createElement("img");
        imgElement.classList.add("card-img-top")
        imgElement.src = photo.url;
        cardElement.appendChild(imgElement);

        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        cardElement.appendChild(cardBody)



        let updateAlbumId = ()=>{
            if(photo.id == localStorage.getItem("id")){
                newAlbumId = localStorage.getItem("albumId")
            }else {
                newAlbumId = photo.albumId
            }
            return newAlbumId
        } 

        const texxt = document.createElement("h5")
        texxt.textContent = updateAlbumId()
        texxt.classList.add("card-title")
        cardBody.appendChild(texxt)


    let updateTitle = ()=>{
        if(photo.id == localStorage.getItem("id")){
            newtitle = localStorage.getItem("title")
        }else {
            newtitle = photo.title
        }
        return newtitle
    }   

    
        const title = document.createElement("p");
        title.textContent = updateTitle();
        title.classList.add("card-text")
        cardBody.appendChild(title);


        

        const edit = document.createElement("button")
        edit.addEventListener("click",()=>{
            location.href = `edit.html?id=${photo.id}`
            
        })
        edit.textContent = "edit"
        edit.classList.add("btn")
        edit.classList.add("btn-warning")
        cardBody.appendChild(edit)

        

        const dlt = document.createElement("button")
        dlt.addEventListener("click",()=>{
            
            let conf = confirm("Are You Sure ?")
            if(conf == true){
                cardElement.remove()
            }
        });
        dlt.textContent = "delete"
        dlt.classList.add("btn")
        dlt.classList.add("btn-danger")
        dlt.classList.add("mx-3")
        cardBody.appendChild(dlt)
    }
    localStorage.clear()
};

