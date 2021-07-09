let btn_responsive = document.getElementById('btn');
let contenedor_enlases = document.getElementById('contenedor_enlases');
let evaluador = 0;

btn_responsive.addEventListener('click',()=>{
    evaluador += 1;

    if(evaluador <= 1){
        contenedor_enlases.className = 'container-enlases-accion';
        contenedor_enlases.style.left = '0px';

    }else{
        contenedor_enlases.className = 'container-enlases';
        contenedor_enlases.style.left = '-100px';
        evaluador = 0;
    }

 
});

