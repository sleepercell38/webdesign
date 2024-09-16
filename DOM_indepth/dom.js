// revsison of document object modelling 

//basically we can access any of the dom elements like this my conenecting the following by ussing (document. ) notation

console.log(window.document);   // shows all elements and tags used in the html document its comes in tht form of an object  


console.dir(document.body);
//dif between dir and log is such that when we use console.log(document.body) -the output would be in the form of object containing all the nodes and childnodes of the the body tag 

// while using console.dir(document.body)- basically it shows all the html element containing in the body tag with the whole tags and text writeen in between



console.log(document.body);


//document.body.innerText="hello world";

// if we have have a lots of text written in html document 
//if we write a body.innertext in js thw whole content would be overwritten

//that why we generally innertext to some specified area only and 

//we use innerhtml to target where ever we want

//document.body.innerHTML="<h1>hello this vishal </h1>"


//basically ww will be craeting a shopping list website 
//here by revising all the topics


additem = document.querySelector(".add");
additem.addEventListener("click", () => {
    list = document.createElement("li")


    list.innerHTML = `ORANGE <button class="btnitems"><i class="fa-solid fa-xmark"id="remove"></i></button></li>`
    main=document.querySelector(".items").appendChild(list);
}

)

removeitem=document.querySelectorAll("#remove");
removeitem.forEach((item)=>{
    item.addEventListener('click',()=>{
        main=document.querySelector(".items")
        li=document.querySelector(".list")
        main.removeChild(li);
    })

})