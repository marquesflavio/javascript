let then = new Date(2020,0,27)
let later = new Date(2023,0,27,20,11,00)
let now = new Date()
let elapsed = now - then

console.log(later.getFullYear())
console.log(then.getFullYear())
console.log(then.getMonth())
console.log(later.getDate())
console.log(later.getHours())
console.log(later.toString())
console.log(later.toDateString())
console.log(later.toLocaleDateString())
console.log(later.toLocaleTimeString())

