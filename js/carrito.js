console.log("funcionando");
document.querySelector('#boton').addEventListener('click',traerDatos());

function traerDatos(params) {
    console.log('dentro de la funcion');

    const xhtpp = new XMLHttpRequest();

    xhtpp.open('GET','rcatalogo.json',true);
    xhtpp.send();
    xhtpp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
        }
    }
}