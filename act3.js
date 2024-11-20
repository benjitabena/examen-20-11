function delay(millisegundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, millisegundos);
    });
} 
delay(7000).then(() => { //cambie el valor de esta espera para que quede bien en la consola
    console.log("¡Espera completada!");
});
delay(6000).then(()=>{
    console.log("Primera espera completada")
}); 
delay(4000).then(()=>{
    console.log("Segunda espera completada")
});
delay(2000).then(()=>{
    console.log("Tercer espera completada")
});