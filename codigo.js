/* El imbecil de Cofla reprobo 2 materias, si 2 materias y como la reprobo va a tener que enviar un formulario
para poder registrarse la mesa de examen para poder intentar aprobarlas, 
PROBLEMA A
El formulario debe contener
-Nombre,email y materia adeduada
-Validar emails y nombres
-Enviar al servidor de manera pulida.

*/


////-----------------------Nombre y apellido-----------------------------------
const verificar_nombre=(nombre)=>
{
    let resultado=false;
    if (nombre.length>0)         //Si tiene algun caracter
    {
        resultado=true;
    }
    else                        //Si no tiene ningun caracter
    {
        resultado=false;
    }

    return resultado;   //Devuelve true o false
}


const contenedor_nombre=document.querySelector("#identidad");  //Seleccionamos la etiqueta donde ocurrira los eventos

contenedor_nombre.addEventListener("click",(e)=>  //Hacemos los eventos del nombre
{
    let nombre_apellido=e.target.value;         //nombre y apellido ingresado por el usuario
    let contenedor=document.querySelector("#V_N");  //La etiqueta donde mostrara Si o No es un nombre
    let verificar=verificar_nombre(nombre_apellido);  //Bool que verifica si hay un nombre o no
    if (verificar==true)
    {
        contenedor.innerHTML=`Si es un nombre valido`;
    }
    else
    {
        contenedor.innerHTML=`No  es un nombre valido`;
    }

});


//------------------------Correo electronico------------------------------------------------

const verificar_correo=(correo)=> //Verifica si es un correo (@gmail.com)
{
    let tamaño=correo.length;    //Cuantos caracteres tiene
    let ver=correo.endsWith("@gmail.com");  //Si el correo escrito por el usuario termina con *@gmail.com* devuelve true, caso contrario devuelve false
    let resultado=false;      //Variable bool que verificara si es o no un correo
    if ((tamaño>0)&& (ver==true))  //Si tiene caracteres y es un correo
    {
        resultado=true;
    }
    else                    //Si no tiene caracteres o no es un correo
    {
        resultado=false;
    }
    return resultado;
}



const contenedor_email=document.querySelector("#correo_electronico")   //Seleccionamos la etiqueta donde ocurrira los eventos

contenedor_email.addEventListener("click",(e)=>   //Hacemos los eventos del correo electronico
{
    let correo_electronico = e.target.value;   //Almacena el correo escrito por el usuario
    let contenedor=document.querySelector("#V_C");  //En que etiqueta mostrara si es valido o no
    let verificar=verificar_correo(correo_electronico);  //Devuelve true si es un correo caso contrario false

    if (verificar==true)
    {
        contenedor.innerHTML="Si es valido";
    }
    else
    {
        contenedor.innerHTML="No es valido";
    }

})


//------------------------Materia---------------------------------------------------

const verificar_materia=(materia)=>
{
    let materias=["matematica","lenguaje","ingles","programacion","estructura de datos"];
    let resultado=false;
    i=0;
    while (i<materias.length)
    {
        if (materia==materias[i])
        {
            resultado=true;
            break;
        }
        else
        {
            resultado=false;
        }
        i++;
    }
    return resultado;
}


const materia=document.querySelector("#materia");

materia.addEventListener("click",(e)=>
{
    let contenedor=document.querySelector("#V_M")
    let verificar = verificar_materia(e.target.value);
    let resultado="";
    if (verificar==true)
    {
        contenedor.innerHTML=`Si esta registrada esa materia`;
    }
    else
    {
        contenedor.innerHTML=`No esta registrada esa materia`;
    }
    return resultado;
})






//----------------------Enviar formulario ---------------------------------------------------------

const enviar_formulario=document.querySelector("#enviar");

enviar_formulario.addEventListener("click",(e)=>
{
    let v_n=document.getElementById('V_N');
    let v_c=document.getElementById('V_C');
    let v_m=document.getElementById('V_M');


    let nombre=document.getElementById('identidad');
    let correo=document.getElementById('correo_electronico');
    let materia=document.getElementById('materia');


    if ((v_n.innerHTML=="Si es un nombre valido")&&(v_c.innerHTML=="Si es valido")&&(v_m.innerHTML=="Si esta registrada esa materia"))
    {
        console.log("Se envio el formulario");
        console.log(nombre.value);
        console.log(correo.value);
        console.log(materia.value);
    }
    else
    {
        console.log("No esta completo");
    
    }
    
})


















