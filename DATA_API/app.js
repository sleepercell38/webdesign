document.getElementById("hello").addEventListener("click", getdata)


async function getdata(){
    const response= await fetch("")
    const result= await result.text;
    console.log(result);

    document.getElementById("div").innerHTML=result
}