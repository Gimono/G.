let gettip=function(total, tippercent = .1){
    return `${total} *${tippercent}`
} 
let result= gettip(100000)
console.log(result)
