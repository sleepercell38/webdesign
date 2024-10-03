document.querySelector("#btn").addEventListener("click", loadtxt);

function loadtxt() {
  //here we create an xhr object  in which here we make a new xmlhttprequest function in which we can manipulate the way we want
  var xhr = new XMLHttpRequest();
  /* after creating the xmlhttprequest we have to open it using xhr.open method in which we pass three parameters 
1.kind of request 
2. url/file 
3.async status(true,false)*/

  xhr.open("GET", "sample.txt", true);

  //next we would make a onload method with which we would check the request status and use it
  //we can simple console.log using the xhr.responsetext method.
  xhr.onload = function () {
    if (xhr.status == 200) {
      document.getElementById("txt").innerHTML = xhr.responseText;
      console.log(xhr.responseText);
    } else {
      document.getElementById("txt").innerHTML = "ERROR";
    }
  };

  xhr.onerror = function () {
    console.log("request error");
  };

  //after checking the request we would send the request
  xhr.send();
}

document.getElementById("btn1").addEventListener("click", getuser);

function getuser() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "ajax.json", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      output = JSON.parse(xhr.responseText);
      document.getElementById("user").innerHTML = `<ul>
            <li>${output.id}</li>
            <li>${output.name}</li>
            <li>${output.email}</li>
            </ul>`;
    }
  };

  xhr.send();
}

document.getElementById("btn2").addEventListener("click", getusers);

function getusers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "ajax2.json", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
       var output = JSON.parse(xhr.responseText);
       var result='';
      for (var i in output) {
           result += '<ul>'+
           '<li>'+output[i].id+'</li>'+
           '<li>'+output[i].name+'</li>'+
           '<li>'+output[i].email+'</li>'+'</ul>'
      }
      document.getElementById("users").innerHTML=result;
    }
  };

  xhr.send();
}


document.getElementById("btn3").addEventListener("click", getgithub)

function getgithub(){
  var xhr= new XMLHttpRequest();
  xhr.open("GET","https://api.github.com/users",true);

  xhr.onload=function(){
    if(xhr.status==200){
      output=JSON.parse(xhr.responseText)
      result=''
     for (i in output){
        result +=
        
        '<img src="'+ output[i].avatar_url+'" width= "70" height="70">'+
        '<ul>'+
        '<li> '+output[i].login+'</li>'+
        '<li> '+output[i].id+'</li>'+
        '</ul>'+'<br>'
     }
     
     document.getElementById("boxy").innerHTML=result;

    }
  }




  xhr.send();
}

