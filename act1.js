function validarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero > 5) {
            resolve(`Número aceptado: ${numero}`);
        } else {
            reject(`Número rechazado: ${numero}`);
        }
    });
}

validarNumero(100).then((mensaje) => {
        console.log(mensaje); 
    }).catch((error) => {
        console.log(error); 
    });
validarNumero(2).then((mensaje)=>{
    console.log(mensaje);
}).catch((error) =>{
    console.log(error)
})

