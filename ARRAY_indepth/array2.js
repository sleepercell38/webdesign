//ARRAY METHODS 

//gettinga aavg print

function gettingavg(){
    sum=0;
    arr=[23,56,78,90]
    arr1=["hello", "vishal", "here", "goodafternoon"]
    for(let i =0;i<arr.length;i++){
        sum= sum+arr[i];
    }
}

gettingavg();
console.log(`the average is ${sum}`)

//using for of loops over arrays
//getting a set of array and printing  new which containes the number divisible by 2 only

function even(){
   
arr1=[]
for(let i of arr){        //basically here i can be accessed directly as a array element
    if(i%2==0){
        arr1.push(i);
    }
}
}
arr=[23,45,56,78,24,43,46,78,90,67,45,65,667]
even()
console.log(arr1);

//foreach loop in array 
//basically foreach loops helps in reching the elements one by one it has a function passed as a callback

arr.forEach((i)=>{
if(i%2==0){
   console.log(i);}
})

function square(){
 
arr3=[];

arr2.forEach((i)=>{
    arr3.push(i*i);
})
}

arr2=[2,3,4,5,6,7]
square();
console.log("old array=",arr2)
    console.log("new array=",arr3)


//question - for exampple you have an array of names of some people you have to sort the array according to that the new array sored haves the names which have word s in it.



   function names(){
    arr4=[]

    arr.forEach((el)=>{
        if(el.includes("s")){     //basically here we used a inbuilt method of include() to check 
                                  // the desired word in the elements of an array 
            arr4.push(el);
        }
    })
   }

   arr=["Ethan Carter",
    "Liam Johnson",
    "Olivia Martin",
    "Ava Brooks",
    "Noah Taylor",
    "Sophia White",
   " Mason Lee",
    "Isabella Wright",
   " Lucas Green",
    "Emma Adams"]

    names();
    console.log(arr4)


    // map method()--map function is same as the foreach() function 
    //basically work is that the callback function written insdie the map function it work on each and every element of the associated array 
    //but the this is that map() method would return you a new array 

    arr=[2,3,4,5,6,7,8];
    let newarr=arr.map(
        (i)=>{
           return (i*i);
        }
    )
    console.log("new array=",newarr)


    // filter method () - 
    //basically in this method a new rray is formed by filtering out the original array to a new array by the given condition ... just like to get a clean water we filter out the impurities we get a clean water.... thus here we get a new filtered array   


    arr=[2,3,4,5,6,7,8];
    let newar=arr.filter(
        (i)=>{
           return (i%2==0);   // returns the filterd conditioning element to the new array
        }
    )
    console.log("new array=",newar)


    //reduce method()- basically reduce methods is used to get some value from a given array 
    //basically its is used to get the sum or average of a given array
    //or to find the largest number 

  // reduce metho d to find the sum 
    arr=[2,3,4,5,6,7,8];
    let output=arr.reduce( (a,b)=>{
        return(a+b);

    }
    )
    console.log("new output=", output)


    // reduce method to find the greatest number 

    arr=[23,56,48,68,49,45,56,64,35,]
    result=arr.reduce(
        (a,b)=>{
          return ( a>b?a:b );   //this is a ternary operator basically checks which number is the largest
        }
    )
console.log(result);


 function numbers(n){
    arr=[];
    for(let i=1; i<n;i++){
        arr[i]=i
    }
  result=arr.reduce(
    (a,b)=>{
        return(a+b);
    }
  )
  result2=arr.reduce(
    (a,b)=>{
        return(a*b);
    }
  )
 }

numbers(10);
console.log(result);
console.log(result2);


arr=[85, 92, 78, 88, 94, 81, 76, 89, 95, 82]
result=arr.filter(
    (i)=>{
        return(i>90);
    }
)
console.log("students who scored more than 90 =", result);





// normal problem -- user would pass a number through a function and you have to create that n elemnts of an array which would contain only prime numbers

