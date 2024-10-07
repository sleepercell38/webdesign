
//using fetch api calls this is a new method of using modern javascript





document.getElementById("btn").addEventListener("click", getuser);

function getuser() {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (res.status == 200) {
        console.log(res);
        hello = res.json();
        console.log(hello)
        return hello;
      }
    })
    .then((data) => {
        console.log(data);
      var output = "<h1>GITHUB USERS</h1>";
      data.forEach((user) => {
        output += `<h1>${user.id}</h1>
            <ul class="ul"> 
            <img src=${user.avatar_url} height="70px" width="70px">
            <div>
            <li> ID-${user.id}</li>
            <li> NAME-${user.login}</li>
            <li>EMAIL-${user.url}</li>
             </div>
            
            </ul>

     `;

        document.getElementById("getuser").innerHTML = output;
      });
    });
}

document.getElementById("btn1").addEventListener("click", getfact)


// basic syntax to fetch data and manuplate it according our needs
function getfact(){
    fetch("https://cat-fact.herokuapp.com/facts")
    .then((response)=>{
        console.log(response)     // fetching an api would always return a promise
        return response.blob();   //we cannot use the promise we cannot use the promise directly so we have to convert in to json() form..

    }).then((data)=>{
              //after returning the data which was in json form we cn use it according to our need 
              // but the thing we have to remember is it is in json form and   json is an array containing many objects in it so wecan directly access them or we can access them by indexing 
         console.log(data.size)
    })
}





