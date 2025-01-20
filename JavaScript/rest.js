function rest(...args){
    let result = 0;
    for(let arg of args){
        result = result + arg;
        
    }
    return result;

}
console.log(rest(10,20,30,40,50))