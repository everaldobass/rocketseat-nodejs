//ClearInterval
const timeOut = 1000
const checking = () => console.log("checking")

let interval = setInterval(checking, timeOut)

//Depois de 4 segundo finaliza a função
setTimeout ( () => clearInterval(interval), 4000)