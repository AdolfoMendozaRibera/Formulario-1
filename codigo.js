/* El imbecil de Cofla reprobo 2 materias, si 2 materias y como la reprobo va a tener que enviar un formulario
para poder registrarse la mesa de examen para poder intentar aprobarlas, 
PROBLEMA A
El formulario debe contener
-Nombre,email y materia adeduada
-Validar emails y nombres
-Enviar al servidor de manera pulida.

*/

//Si escribimos en la *consola nombre.value*  nos devuele el contenido del nombre
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");  


boton.addEventListener("click",(e)=>
{
    e.preventDefault();  //Retiene los datos del formulario
    let error=validarCampos(); //Se almacena un true o false
    if (error[0])
    {
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }
    else  
    {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})



const validarCampos =() =>
{
    let error = [];
    if (nombre.value.length < 5  || nombre.value.length > 40)
    {
        error[0] = true;
        error[1] = "El nombre es invalido.";
        return error;
    } 
    else if (email.value.length < 5   ||  //Para que cuando cambiaen el codigo por consola, igual pida un correo valido
            email.value.length >40   || 
            email.value.indexOf("@") == -1  ||
            email.value.indexOf(".") == -1)
    {
        error[0] = true;
        error[1] = "El mail es invalido";
        return error;
    }
    else if (materia.value <4 || materia.value > 40)
    {
        error[0] = true;
        error[1] = "La materia no existe";
    }

    error[0]=false;
    return error; 
}




