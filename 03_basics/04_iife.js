// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // Named IIFE
    console.log("DB Connected");
})();

((name) => {
    console.log("DB Conncted Two" + name);
})("Dipak");