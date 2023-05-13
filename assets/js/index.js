//funcion para tranferir de cuenta 1 a 2
function formula(){
    var cantidadT= parseInt(document.getElementById('cant').value);
    var cantidad1= parseInt(document.getElementById('c1').value);
    var cantidad2= parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value=(cantidad1-cantidadT);
    document.getElementById('c2').value=(cantidad2+cantidadT);
}
//funcion para transferir de cuenta 2 a 1
function formula2(){
    var cantidadT= parseInt(document.getElementById('cant').value);
    var cantidad1= parseInt(document.getElementById('c1').value);
    var cantidad2= parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value=(cantidad1+cantidadT);
    document.getElementById('c2').value=(cantidad2-cantidadT);
}

//funcion para hacer los depositos
function formula3(){
    var cantidadT= parseInt(document.getElementById('cant').value);
    var cantidad1= parseInt(document.getElementById('c1').value);
    var cantidad2= parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value=(cantidad1+cantidadT);
    
}


//funcion para depositar a la cuenta 2 
function formula4() {
    var cantidadT= parseInt(document.getElementById('cant').value);
    var cantidad1= parseInt(document.getElementById('c1').value);
    var cantidad2= parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value=(cantidad2+cantidadT);
}
//funcion para hacer retiro cuenta 1
function formula5(){
    var cantidadT= parseInt(document.getElementById('cant').value);
    var cantidad1= parseInt(document.getElementById('c1').value);
    var cantidad2= parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value=(cantidad1-cantidadT);
} 

//funcion para hacer retiro cuenta 2
function formula6(){
    var cantidadT= parseInt(document.getElementById('cant').value);
    var cantidad1= parseInt(document.getElementById('c1').value);
    var cantidad2= parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value=(cantidad2-cantidadT);
} 

