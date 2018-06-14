const collections = [1, [2, [4, [5, [6]], 3]]]

function criteriaFn(n) {
  n => n > 5;
  //n => (typeof n === 'number' && n > 5)
}
function find(array, criteriaFn) {
  let current = array
  let next = []
  
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}