//basically  we will brush up what we have learnt from arrys these past days and have a quick revision

//arrays- basically arrays is a collection of similar kind of data 
//nevertheless we could store other data types as well ..but for the good sake of coding we dont do so 

//basically there are many array methods 
/* 
push()- basically this add an element at the end of an array
pop()-  this deletes an element from the end of an array
shift()- this deletes and element at the starting of an array
unshift()- this  adds an element from the starting of ana array


concat()-  like  normal string concatination this a also concatinate two or more arrays*/

const arr1=[1,2,3,3,4,5];
const arr2=[5,8,6,9];

arr3=arr1.concat(arr2);
console.log(arr3);

//slice()
//basically slicing in array is just like slicing in strings only in the slice ( )we give the desired arguments from where we want to start the slicing and where we want to end 
// other imp thing is slicing would never change the original array it would give you a new array instead 

const arr4= ["hello","this","vishal", 41,72,30,47,5,6,7]
arr5=arr4.slice(1,4) ;                //basically the argument passed here means that the slicing would start from the index 1 and will go till index 3 (not 4)

console.log(arr5)
console.log("original array- ",arr4);



//splice()- splicing of an array is quite similiar to slicing of an array but in this it changes in the original array
//and the indexing is also a bit different for example if the arguments are (1,4) then the slicing would be done till index 4 

// splicing in array always effect the original array


console.log("..........splicing of an array.........")
const arr6= ["hello","this","vishal", 41,72,30,47,5,6,7]
arr5=arr6.splice(1,4) ;                //basically the argument passed here means that the slicing would start from the index 1 and will go till index 4

console.log(arr5)
console.log("original array- ",arr6);





