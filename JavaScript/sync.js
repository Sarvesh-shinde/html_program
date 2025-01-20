const sayHi=()=>{
    console.log("It is a sayHi function");
}

const sayHello=()=>{
    console.log("beginning of sayHello function");
        setTimeout(()=>{
            sayHi();
        },9000)
console.log("End of the say hello function")
}

sayHello();//function calling