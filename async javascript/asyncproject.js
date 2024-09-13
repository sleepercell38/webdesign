//promises
// 
function getdata1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("getting some data.....")
          let error= true  ;
          if( error==true){

            reject("SOME ERROR OCCURED")
          }else {
            resolve({username:"ananaya",age:36,gender:"lesbian"})
          }
        }, 4000);
    })
}
async function gettingdata1(){
    try {
        let response= await getdata1();
        console.log(response)
        setTimeout(()=>{
            console.log("DATA SUCCESSFULLY FETCHED !!..")
    
        },2000)
        
    } catch (state) {
        console.log("E: some error occured")
    }
}

gettingdata1();























