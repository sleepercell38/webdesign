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
    
    let itemName = document.querySelector("#input1").value
    // here we add value to the input tag to store the data to the constant and then add it to the list item.


    list = document.createElement("li")
    list.className="list"
    text=document.createTextNode(itemName)
    list.appendChild(text);

    button=document.createElement("button")
    button.className="btnitems"
    
    icon=document.createElement("i")
    icon.id="remove";
    icon.className="fa-solid fa-xmark"

    button.appendChild(icon);
    list.appendChild(button);

    main=document.querySelector(".items").appendChild(list);
}

)

// removeitem=document.querySelectorAll("#remove");
// removeitem.forEach((item)=>{
//     item.addEventListener('click',()=>{
//         main=document.querySelector(".items")
//         li=document.querySelector(".list")
//         main.removeChild(li);
//     })

// })

//example of event delegation

main=document.querySelector(".items").addEventListener("click", (event) => {
    if (event.target.id === "remove") {
        const listItem = event.target.closest("li"); // Get the closest li element
        listItem.remove(); // Remove the clicked list item
    }
});

//basically on events we have keyboard events aswell
//we have keypress , keydown, keyup
//most of the time we use key press only

clr=document.querySelector("#clear")
items=document.querySelector(".items")
clr.addEventListener("click",()=>{
     items.innerHTML="";
})
//it also have some properties like key, keycode, code 


// additem = document.querySelector(".add");
// additem.addEventListener("click", ()=>{
//     let filtervalue=document.querySelector(".filter").value
    
//     console.log(filtervalue)
// })