function area (r) {
    PI = 3.14
    a = PI * r * r
    return a
}
let circle = area(6)
console.log(circle)

function check_pn (x){
    if ( x < 0 ) {
        res = 'negative'
        return res
    }
     else  {
        res = 'positive'
        return res
    }
}
let m = -7
let n = check_pn(m)
console.log(n)
let z = check_pn(100)
console.log(z)

function verify (y){
    if ( y % 2 == 0 ) {
      result = 'even'
      return result
    }
    else {
      result = 'odd'
      return result
    }
}  
let h = 12
let b = verify(h)
console.log(b)
let c = 131
let d = verify(c)
console.log(d)
     