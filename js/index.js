var intentos =0;
var autonumero = Math.floor(Math.random()*10 +1); // el ramdom solo devuelve numero de 0 a 1 , la funcion floor devuelve la parte entera del numero 
var listaDeNumeros = " ";
var respuesta =document.querySelector('#numero2')
var mayorMenor=document.querySelector('#imp_pista');
 // Puede traer varios objetos

function imprimerNumero(){
    var ingreso = document.querySelector('#idnumero').value;
    
    //document.getElementById("numero2").innerHTML = autonumero; //trae un solo objeto
    listaDeNumeros = listaDeNumeros + " "+ ingreso;
    intentos++;
    if(ingreso==autonumero){
        gano();
    }else{
        pista(autonumero,ingreso);
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
    document.querySelector('#boton').setAttribute("disabled", false);
    document.querySelector('#reset').removeAttribute("disabled");
    //console.log("Adivino ! Felicitaciones ");
}
function fallo(){
    if (intentos >= 3){
        console.log("Mejor Suerte para la proxima");
       // document.getElementById("numero2").innerHTML = "Perdio !"
        document.querySelector('#boton').setAttribute("disabled", false);
        document.querySelector('#reset').removeAttribute("disabled");
        respuesta.textContent ="Perdio!"
    }else{
        console.log("Vuela a intentarlo");
        
    }
    
}


function pista( autonumero,ingreso){
    console.log(ingreso)
    if(autonumero>ingreso){
        mayorMenor.textContent="El numero es mayor que "+ ingreso;
        mayorMenor.style.background ="yellow";
        console.log("Es Mayor que 5")

    }else{
        mayorMenor.textContent="El numero es Menor que "+ ingreso.toString();
        mayorMenor.style.background ="yellow";
        console.log("Es menor que 5")
    }
}

function reset(){
    intentos=0;
    console.log(intentos);
    let ingreso = document.querySelector('#idnumero').value="";
    document.querySelector('#reset').setAttribute("disabled", false);
    document.querySelector('#boton').removeAttribute("disabled");
    respuesta.textContent =""
    mayorMenor.textContent=" ";

}

    //document.getElementById("idnumero").value= autonumero;
    //svar x = document.getElementById("myText").value;