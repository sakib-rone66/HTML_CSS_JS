function add(a, b) {
    return a + b;
};

function multiply(a,b){
    return a*b;
};

function div (a,b){
    return a/b;
}
module.exports = {           // Export more than function, if one then module.exports = functionName;
    add,
    multiply,
    div
};