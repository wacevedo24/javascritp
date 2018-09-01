var intentos =0;
var autonumero = Math.floor(Math.random()*10 +1); // el ramdom solo devuelve numero de 0 a 1 , la funcion floor devuelve la parte entera del numero 
var listaDeNumeros = " ";
var respuesta =document.querySelector('#numero2')
var mayorMenor=document.querySelector('#imp_pista');
function imprimerNumero(){
    let ingreso = document.querySelector('#idnumero').value; // Puede traer varios objetos
    
    //document.getElementById("numero2").innerHTML = autonumero; //trae un solo objeto
    listaDeNumeros = listaDeNumeros + " "+ ingreso;
    intentos++;
    if(ingreso==autonumero){
        gano();
    }else{
        pista(autonumero);
        fallo();
        
    }

    console.log(autonumero);
    console.log(ingreso);
    console.log(intentos);

    

}
function gano(){
    document.getElementById("numero2").innerHTML = "Gano !"
    respuesta.textContent ="Gano !"
    mayorMenor.textContent=" ";
    //console.log("Adivino ! Felicitaciones ");
}
function fallo(){
    if (intentos >= 3){
        console.log("Mejor Suerte para la proxima");
       // document.getElementById("numero2").innerHTML = "Perdio !"
        respuesta.textContent ="Perdio!"
    }else{
        console.log("Vuela a intentarlo");
        
    }
    
}


function pista( autonumero){
    if(autonumero>5){
        mayorMenor.textContent="El numero es mayor que 5";
        mayorMenor.style.background ="yellow";
        console.log("Es Mayor que 5")

    }else{
        mayorMenor.textContent="El numero es Menor que 5";
        mayorMenor.style.background ="yellow";
        console.log("Es menor que 5")
    }
}

    //document.getElementById("idnumero").value= autonumero;
    //svar x = document.getElementById("myText").value;