
// ## 💻 Ejercicios

// ### Ejercicios: Nivel 1

// 1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

//    ```sh
//    Ingrese su edad: 30
//    Tiene la edad suficiente para conducir.

//    Ingrese su edad:15
//    Te faltan 3 años para conducir.
//    ```
let edad = parseInt(prompt('Ingrese su edad: '));
if(edad >= 18) {
  alert('Tiene la edad suficiente para conducir.')
} else {
  alert(`Aún no tiene la edad para conducir. Le faltan ${18 - edad} años.`)
}

// 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

//    ```sh
//    Ingrese su edad: 30
//    Eres 5 años mayor que yo.
//    ```

let myAge = parseInt(prompt('Ingrese su edad: '))
let yourAge = parseInt(prompt('Ingrese otra edad: '))
if(myAge < yourAge) {
  alert(`Soy ${yourAge - myAge} años menor que tú`)
} else if(myAge > yourAge) {
  alert(`Soy ${myAge - yourAge} años mayor que tú`)
} else {
    alert('Tenemos la misma edad');
}

// 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

//    - Usando if else
//    - operador ternario.

//    ```js
//    let a = 4;
//    let b = 3;
//    ```

//    ```sh
//      4 es mayor que 3
//    ```

let a = 4;
let b = 3;
if(a > b) {
  console.log(`${a} es mayor que ${b}`);
} else {
  console.log(`${a} es menor que ${b}`);
}

let simulation = a > b ? console.log(`${a} es mayor que ${b}`) : console.log(`${a} es menor que ${b}`);

// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

//    ```sh
//    Ingrese un número: 2
//    2 es un número par

//    Ingrese un número: 9
//    9 es un número impar
//    ```

let isPar = parseInt(prompt('Ingrese un número: '));
if (isPar % 2 === 0) {
  alert(`${isPar} es un número par`);
} else {
  alert(`${isPar} es un número impar`);
}



// ### Ejercicios: Nivel 2

// 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

let notaEstudiante = parseInt(prompt('Ingrese la nota del 0 al 100: '));
if(notaEstudiante >= 0 && notaEstudiante <= 49) {
  alert(`Tu nota ${notaEstudiante} es una F`);
} else if(notaEstudiante >= 50 && notaEstudiante <= 59) {
  alert(`Tu nota ${notaEstudiante} es una D`);
} else if(notaEstudiante >= 60 && notaEstudiante <= 69) {
  alert(`Tu nota ${notaEstudiante} es una C`);
} else if(notaEstudiante >= 70 && notaEstudiante <= 89) {
  alert(`Tu nota ${notaEstudiante} es una B`);
} else if(notaEstudiante >= 90 && notaEstudiante <= 100) {
  alert(`Tu nota ${notaEstudiante} es una A`);
} else {
  alert('Esa no es una nota válida');
}

// 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano.
//    Si la entrada del usuario es :

//    - Septiembre, Octubre o Noviembre, la temporada es Otoño.
//    - Diciembre, Enero o Febrero, la temporada es Invierno.
//    - Marzo, Abril o Mayo, la temporada es Primavera
//    - Junio, Julio o Agosto, la temporada es Verano

let estacion = prompt('Ingrese el mes del año: ').toLowerCase();
if(estacion === 'septiembre' || estacion === 'octubre' || estacion === 'noviembre') {
  alert('Estamos en Otoño')
} else if(estacion === 'diciembre' || estacion === 'enero' || estacion === 'febrero') {
  alert('Estamos en invierno');
} else if(estacion === 'marzo' || estacion === 'abril' || estacion === 'mayo') {
  alert('Estamos en primavera');
} else if(estacion === 'junio' || estacion === 'julio' || estacion === 'agosto') {
  alert('Estamos en verano');
}

// 3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.

// ```sh
//     ¿Qué día es hoy? Sábado
//     El sábado es fin de semana.

//     ¿Qué día es hoy? sábAdo
//     El sábado es fin de semana.

//     ¿Qué día es hoy? Viernes
//     El viernes es un día laborable.

//     ¿Qué día es hoy? ViErNes
//     El viernes es un día laborable.
// ```

let diaSemana = prompt('Ingrese un día de la semana: ').toLowerCase();

if(diaSemana === 'sábado' || diaSemana === 'domingo') {
    alert(`El ${diaSemana} no es un día laborable`)
} else if (diaSemana === 'lunes' || diaSemana === 'martes' || diaSemana === 'miércoles' || diaSemana === 'jueves' || diaSemana === 'viernes') {
    alert(`El ${diaSemana} es un día laborable`);
} else {
    alert('Eso no es un día de la semana')
}

// ### Ejercicios: Nivel 3

// 1. Escribe un programa que diga el número de días en un mes.

// ```sh
//   Introduce un mes: Enero
//   Enero tiene 31 días.

//   Introduce un mes: ENERO
//   enero tiene 31 dias

//   Introduce un mes: Febrero
//   Febrero tiene 28 días.

//   Introduce un mes: FEbrero
//   Febrero tiene 28 días.
// ```

let mes = prompt('Introduce un mes: ').toLowerCase();

switch(mes) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        alert(`${mes} tiene 31 días`);
        break;
    case 'febrero':
        alert(`${mes} tiene 28 días. Si es bisiesto tiene 29 días`);
        break;
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        alert(`${mes} tiene 30 días`);
        break;
}

// 2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.

let mes2 = prompt('Introduce un mes: ').toLowerCase();
let year = parseInt(prompt('Introduce un año: '));

if(mes2 === 'febrero' && (year % 4 === 0)) {
    alert(`${mes2} en el año ${year} tiene 29 días`);
} else if (mes2 === 'febrero') {
    alert(`${mes2} tiene 28 días`);
} else if (mes2 === 'enero' || mes2 === 'marzo' || mes2 === 'mayo' || mes2 === 'julio' || mes2 === 'agosto' || mes2 === 'octubre' || mes2 === 'diciembre') {
    alert(`${mes2} tiene 31 días`);
} else if (mes2 === 'abril' || mes2 === 'junio' || mes2 === 'septiembre' || mes2 === 'noviembre') {
    alert(`${mes2} tiene 30 días`);
} else {
    alert('Esto no es un mes válido');
}