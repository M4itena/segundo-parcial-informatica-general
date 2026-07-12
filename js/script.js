//Producción de instalaciones interactivas
//Array de obejtos con la info dada
let infoItemNum1 = [];
let infoItemNum2 = [];
let infoItemNum3 = [];
//Variables
let cantidadInstalaciones = document.querySelector('#num1');
let nombreInstalaciones = document.querySelector('#nombInstalacion');
let cantidadTrabajadores = document.querySelector('#numTrabjadores');
let horariosTrabajadores = document.querySelector('#horasTrabajo');
let valorHonorario = document.querySelector('#numHonorario');
let diasProduccion = document.querySelector('#diasEstimados');
//Variables ara los botones
let botonCalcular = document.querySelector('#calcularForm');
//Variable para mostrar los resultados
let resultados = document.querySelector('#resultadosFormulario');

//Cuando toquen el boton se van a mostrar los resultados 
botonCalcular.addEventListener('click', function(){
    //tomar las otras funciones y haer que se muestren en la pantalla
    
})

//Funcion para calcular el costo total por dia 
function calcularCostoDia() {
    let trabajadores = Number(cantidadTrabajadores.value);
    let horas = Number(horariosTrabajadores.value);
    let horario = Number(valorHonorario.value);

    let costoDia = trabajadores * horas * horario;

    return costoDia;
}