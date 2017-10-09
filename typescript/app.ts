let message : string = "help me, Oi-Wan Kenobi, You're my only hope!"
console.log(message)

let episode: number = 4
console.log("this is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid:string
favoriteDroid = 'BB-8'
console.log("my favorite droid is " + favoriteDroid)

let isEnoughToBeatMF = function (parsecs: number) : boolean{
    return parsecs < 12
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'} `)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call("R2")

function inc (speed: number, inc: number = 1) : number {
    return speed + inc
}

console.log(`inc (5, 2) = ${inc(5, 2)}`)
console.log(`inc (5) = ${inc(5)}`)
