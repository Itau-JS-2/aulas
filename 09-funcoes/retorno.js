function createGreeting(name) {
    if (name) {
        return "Hello ".concat(name, "!");
    }
}
var createArrowGreeting = function (name) {
    return "Hello, ".concat(name || 'Anonymous');
};
var myGreeting = createGreeting('Mateus');
function logGreeting(name) {
    console.log("Hello, ".concat(name, "!"));
    return undefined;
}
var result = logGreeting('Mateus');
console.log(result);
