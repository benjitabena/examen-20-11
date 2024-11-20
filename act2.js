function multiplyByThree(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * 3);
        }, 2000);
    });
}
function addFive(numero) {
    return new Promise((resolve) => {
        resolve(numero + 5);
    });
}
const numeroInicial = 5;

multiplyByThree(numeroInicial).then((resultado) => {
        console.log(`Resultado después de multiplicar por 3: ${resultado}`);
        return addFive(resultado);
    }).then((resultadoFinal) => {
        console.log(`Resultado final después de sumar 5: ${resultadoFinal}`);
    }).catch((error) => {
        console.error(`Se produjo un error: ${error}`);
    });