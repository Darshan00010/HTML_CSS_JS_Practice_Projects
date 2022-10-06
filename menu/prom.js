function prom(a,b){

    return new Promise(
        function(resolve,reject){
            console.log("Calculating");
            setTimeout(()=>{
                if(a,b){
                    resolve(`The answer is ${a/b}`)
                }else{
                    reject("infinity cant divide by zero")
                }
            },3000)
        }
    )

}
prom(5,0).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
})