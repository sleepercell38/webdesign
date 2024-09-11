//ASYNCHRONOUS JAVASCRIPT

//basically asynchronous js is nothing but a way of programming in which we used to code in way such that the previous line wouldnt block the execution of the upcomming line


//synchronus js- in synchronous code the previous line would wait for the other line to execute the execute the whole program would be on hold untill and unless that line of code gets executed


//example of async js

/*console.log("hello");
console.log("vishal");
setTimeout(()=>{
    console.log("hello this line is late executed")
},4000)
console.log("3rd line ");*/

//basically if we execute the upper code without the setimeout then the code would be execued at once but if want to execute a line after some times it would be difficult so we used a way of async js here


//callbacks
//basically callbacks are that time of function which we pass as an argument to other functions 

/*function sum(a,b){
 console.log(a+b);
}
 function calculate(a,b,sum){
    sum(a,b);   
 }
 calculate(1,2,sum);

//callback hell- this problem occurs when for example if i want any output at a delay of 5 sec but one after another 

console.log("first line getting executed")
setTimeout(()=>{
    console.log("hello this is second line")
}, 7000)
setTimeout(()=>{
    console.log("hello this is third line")
}, 3000)*/

// this is an example of async code .. no line of code is dependent on each other to get executed

//basically the problem arises when we use callback but we want the output in such a mannner that if line one gets executed after a delay of 2 sec after then the line 2 will be shown as aoutput , no matter that it has been executed earlier but i want the output after the delay of 2 sec only ---------- this problem can be solved by adding multiple nested callbacks ...for eg->

function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("the data is- ",dataid);
        if(getnextdata){
            getnextdata();
        }
    },3000)
}

getdata(234,()=>{
    console.log('getting the second data.....')
    getdata(345,()=>{
        console.log('getting the third data.....')
        getdata(897)
    })
})


