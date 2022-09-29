let c=[22,33,44,55];

let sum=(value,...num)=>{
    console.log(value)
    let s=0;
    for(let i in num){
        s=+num[i];
    }
    console.log(s)
}

sum("bull",...c);

