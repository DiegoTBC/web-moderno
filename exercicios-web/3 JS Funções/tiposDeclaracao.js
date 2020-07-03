console.log(soma(3, 4))

// function declaration
// O JS carrega primeiro todas as funções
// Logo declarar dessa forma possibilitará chamar a função
// acima da declaração
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))