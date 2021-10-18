//Larissa López
//Quinto B
//Aplicaciones Web I
//ACEPTAR TERMINOS DE PRIVACIDAD
function aceptar() {
    var opcion = document.formulario1.condiciones; //Acceso al botón
    if (opcion.checked == true) { //Botón seleccionado
       alert("El formulario fue enviado con éxito") //Alerta que el formulario fue enviado
       }
    else {  //Botón no seleccionado
       alert("El formulario no ha podido enviarse. \n Debe aceptar las políticas de privacidad ");
       return false; //El formulario no se envia
       }
    }

    //LIMPIAR CAMPOS O DATOS REQUERIDOS
    function limpiar() { //Función limpiar 
        var inp = document.getElementsByClassName('input');
        for (var datos = 0; datos < inp.length; datos++) {
            inp[i].addEventListener('keyup', function () {
                if (this.value.length >= 1) {
                    this.nextElementSibling.classList.add('determinar');
                } else {
                    this.nextElementSibling.classList.remove('determinar');
                }
                
            })
        }
        var limpia = "¡Se han limpiado los campos!";//Se limpia los datos
               alert(limpia); //Se notifica que los datos fueron limpiados en el formulario
    }
    

  
