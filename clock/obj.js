let fname="darsh"
let lname="shetty"

let obj1={
    fullname:fname+" "+lname,
    details(){
        return `${this.fullname}`
    },
    obj2(fullname,lname=22){
    return {fname,lname}
    }

}
let sec=obj1.obj2();
console.log(sec);
// console.log(obj1.details());
// create object using functio;