// parâmetros.ts
// Funções podem ser invocadas com argumentos de valor inesperado.
// Aqui, "text" recebe o número 3, mas números não têm propriedade "length".
function printLengthOfText(text) {
    console.log(text.length);
}
printLengthOfText(3); // Prints: undefined
// Solução: verificar o tipo do argumento antes de usá-lo.
function printLengthOfTextSafe(text) {
    if (typeof text !== 'string') {
        throw new Error('Argument is not a string!');
    }
    console.log(text.length);
}
try {
    printLengthOfTextSafe(3); // Error: Argument is not a string!
}
catch (err) {
    console.error(err.message);
}
// Exemplo de parâmetros invertidos.
// "value" era esperado como número, mas recebeu uma string → resulta em NaN.
function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log("".concat(greeting, ", ").concat(triple(value), "!"));
}
greetTripled(5, 'Hiya'); // Resultado inesperado: "5, NaN!"
// Solução: adicionar tipagem para garantir a ordem e o tipo corretos.
function tripleTyped(value) {
    return value * 3;
}
function greetTripledTyped(greeting, value) {
    console.log("".concat(greeting, ", ").concat(tripleTyped(value), "!"));
}
greetTripledTyped('Hiya', 5); // OK: "Hiya, 15!"
// Exemplo de parâmetro obrigatório: em TS, o parâmetro é sempre exigido.
function greet(name) {
    console.log("Hello, ".concat(name || 'Anonymous', "!"));
}
greet('Anders'); // OK
// greet(); // ❌ Erro: Expected 1 arguments, but got 0
// Tornando o parâmetro opcional com "?" — deve vir após os obrigatórios.
function greetOptional(name) {
    console.log("Hello, ".concat(name || 'Anonymous', "!"));
}
greetOptional(); // Hello, Anonymous!
greetOptional('Mateus'); // Hello, Mateus!
// Parâmetros padrão: permitem definir um valor por padrão automaticamente.
function greetDefault(name) {
    if (name === void 0) { name = 'Anonymous'; }
    console.log("Hello, ".concat(name, "!"));
}
greetDefault(); // Hello, Anonymous!
greetDefault('Mateus'); // Hello, Mateus!
// Exemplo com parâmetros padrão para simplificar o código.
function proclaim(status, repeat) {
    if (status === void 0) { status = 'not ready...'; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm ".concat(status));
    }
}
proclaim(); // I'm not ready...
proclaim('ready?'); // I'm ready?
proclaim('ready!', 3); // I'm ready! (x3)
