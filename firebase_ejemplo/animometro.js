import { ingresoVisitante, getTask, saveChatMessage, onGetChat, SaveMail } from './firebase.js'

console.log('iniciando Animometro')


const valores = window.location.search;

//Mostramos los valores en consola:
console.log(valores);

//Resultado:
//producto=camiseta&color=azul&talla=s

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var idAnimometro = urlParams.get('id');
var data_id = urlParams.get('data');
//Verificar si existe el parámetro
console.log(urlParams.has('id'));

//Puedes recorrer los valores, claves y pares completos.
//const
//keys = urlParams.keys(),
// values = urlParams.values(),
// entries = urlParams.entries();

var nombreChat = "";

//for (const value of values)  nombreChat = "chat." + value;

nombreChat = "chat." + idAnimometro;

//camiseta, azul, s

//formulario del chat
const protectorMazo = document.getElementById('protector-mazo')

const tasktitle = document.getElementById('task-title')

const taskdescription = document.getElementById('task-description')
//contenedor base
const taskContainer = document.getElementById('task-container')
// utilizado para mostrar mensajes exitosos
const alertSuccess = document.getElementById('alert-success')
// utilizado para mostrar mensajes erroneos
const alert_mensaje = document.getElementById('alert-mensaje')
//donde se generara el histrial del chat
const chatContent = document.getElementById('chatContent')

//btn para guardar el mensaje del chat
const btnChat = document.getElementById('btnChat')
//btn para cambiar la carta
const btnchangecard = document.getElementById('btn-change-card')
//titulo de la pagina
const titulo_animometro = document.getElementById('titulo-animometro')
// marco de la carta seleccionada 
const marco_carta_seleccionada = document.getElementById('carta-activa')

//index de la seleccion del usuario para seleccion de carta
const moveCard = document.getElementById('move-card');
//ontenedor principal del animometro, parte escondido
const contenedorAnimometro = document.getElementById('contenedor_animometro');
// btn de identificador
const btnIdentify = document.getElementById('btn-identify');
//formulario de bienvenidapara identificar al usuario
const formBienvenida = document.getElementById('form_bienvenida');
//aqui se guarda el txt que guarda el nombre del usuario original
const floatingUsername = document.getElementById('floatingUsername');

//aqui se guarda el txt que guarda el Mail del usuario original
const floatingEmail = document.getElementById('floatingEmail');

//check box ingreso anonimo
const chAnonimo = document.getElementById('chAnonimo');


//aqui se guarda el txt que el mensaje que ingresa en elchat
const text_message = document.getElementById('message');

//alerta
const alertError = document.getElementById('alert-danger');

//navbar
const NavBar = document.getElementById('NavBar');




// 
var nombreJugador = floatingUsername.value;
var mailJugador = floatingEmail.value;

let editStatus = false
let idVigente = '';

//inicio carga pagina
window.addEventListener('DOMContentLoaded', async (e) => {
  //  console.log(getTasks())

  //asi se traian las tareas originalmente
  //  const querySnapshot = await getTasks()



  titulo_animometro.innerHTML = ` <p> ID Sesión Animometro :  ${idAnimometro}</p>  <p> Bienvenid@ - Vamos a Jugar`
  idVigente = idAnimometro;
  const doc = await getTask(idAnimometro)
  console.log(doc.data())
  const task = doc.data()

  tasktitle.innerText = task.title
  taskdescription.innerText = task.description


  ingresoVisitante('Bienvenid@ ,' + 'llegaste a nuestra web' + 'Animometro : id=' + doc.id);







  //permite la recepcion en tiempo real 
  onGetChat((querySnapshot, nombreChat) => {


    chatContent.innerHTML = ""

    console.log(querySnapshot)



    //  const stateQuery = query(querySnapshot, where("FechayHora", "==", "CA"));

    querySnapshot.forEach(doc => {

      const task = doc.data()

      chatContent.innerHTML += `
      
        
        <div class="row" style="max-width: 500px; ">
        <div class="col-4">${task.fechaYHora}</div>
        <div class="col-4">${task.nombre}</div>
        <div class="col-4">${task.description} </div>
      </div>
   
                 
               
                   `

    })





    // console.log(btnEdit)


  }, nombreChat)




})



btnChat.addEventListener('click', (e) => {
  e.preventDefault()


  //desactivo el boton al iniciar 
  setTimeout(function () { btnChat.disabled = true; }, "10");

  console.log('Presionamos el Mensaje del Chat')





  console.log('se envio el mensaje')

  //alert_mensaje.innerHTML = "Nuevo Mensaje Ingresado = " + description.value ;


  saveChatMessage(nombreJugador, text_message.value, idVigente)

  text_message.value = " "


  //desactivo el boton al iniciar 
  setTimeout(function () { btnChat.disabled = false; }, "5000");


})

text_message.addEventListener("keydown", (e) => {

  if (e.code === 'Enter') {

    /// const description = protectorMazo['message'] 

    saveChatMessage(nombreJugador, text_message.value, idVigente)

    text_message.value = " "
  }
})

protectorMazo.onsubmit = function (e) {

  e.preventDefault();
};

SeleccionarCarta.onsubmit = function (e) {

  e.preventDefault();
};



// el arreglo que tiene el mazo
const Cartas = ['games/JXmbTRhgHRLxVcLeI2wF/img/back.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/back-loading.gif',
  'games/JXmbTRhgHRLxVcLeI2wF/img/back-red',
  'games/JXmbTRhgHRLxVcLeI2wF/img/back-yellow.jpg',

  'games/JXmbTRhgHRLxVcLeI2wF/img/1_DYD_dragon.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/2_DYR_serpiente.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/3_DYR_Luna.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/4_DYR_Vieto.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/5_DYR_Enlazador_de_mundo.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/6_Dyr_perro.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/7_Dyr_noche.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/8_Dyr_mano.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/9_DYR_Mono.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/10_DYR_Semilla.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/11_DYR_estrella.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/12_DYR_humano.jpg',
  'games/JXmbTRhgHRLxVcLeI2wF/img/13_DYR_abedul.jpg',];


btnchangecard.addEventListener('click', (e) => {


  if (!parseInt(moveCard.innerText)) {

    moveCard.innerText = '0';

  }

  var cantidad_back = 4;

  var index_back_carta = Math.floor(Math.random() * cantidad_back)

  marco_carta_seleccionada.src = Cartas[(index_back_carta)];


  //selecciona numeros despues
  var seleccionCardIndex = Math.floor(Math.random() * 13) + 1;

  seleccionCardIndex = seleccionCardIndex + parseInt(moveCard.innerText);



  while (seleccionCardIndex > Cartas.length) {

    seleccionCardIndex = Math.floor(seleccionCardIndex / 10);

  }

  while (seleccionCardIndex <= cantidad_back) {
    seleccionCardIndex = Math.floor(seleccionCardIndex + (Math.random() * cantidad_back));


  }


  //desactivo el boton al iniciar 
  setTimeout(function () {
    btnchangecard.disabled = true;

    marco_carta_seleccionada.src = Cartas[seleccionCardIndex];


  }, "1000");

  console.log('btn-change-card cuantas son :' + Cartas.length)
  console.log('btn-change-card Index que salio en las cartas :' + seleccionCardIndex)





  //desactivo el boton al iniciar 
  setTimeout(function () {
    btnchangecard.disabled = false;

    //marco_carta_seleccionada.src = Cartas[0];

  }, "3000");



})




btnIdentify.addEventListener('click', (e) => {

  //recuperar los datos que ingresaron
  nombreJugador = floatingUsername.value;
  mailJugador = floatingEmail.value;

  //si no es anonimo
  if (!chAnonimo.checked) {


    //validación nombre si no tiene nombre
    if (nombreJugador == '') {

      //solicita un nombre
      alertError.innerHTML = ` <p>Debes Ingresar un nombre de Jugador</p>`

      alertError.style = 'visibility=visible'

      setTimeout(function () { alertError.style = 'visibility: hidden' }, 3000)

      return


    }


    //si tiene mail 
    if (mailJugador != '') {

      //expresión regular para validar correo
      let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;



      //si es un mail valido
      if (re.exec(mailJugador)) {

        SaveMail(mailJugador, nombreJugador, idAnimometro);

      } else {

        //solicita un nombre
        alertError.innerHTML = ` <p>El correo ingresado no es valido</p>`

        alertError.style = 'visibility=visible'

        setTimeout(function () { alertError.style = 'visibility: hidden' }, 3000)

        return

      }








      contenedorAnimometro.style.display = 'block';
      NavBar.style.display = 'block';

      titulo_animometro.innerHTML = ` <p> ID Sesión Animometro :  ${idAnimometro}</p>  <p> Bienvenid@   ${nombreJugador} -  ${mailJugador}`


      formBienvenida.style.display = 'none';





    } else {

      //solicita un nombre
      alertError.innerHTML = ` <p>Ingresa un mail o selecciona ingresar de forma anonima</p>`

      alertError.style = 'visibility=visible'

      setTimeout(function () { alertError.style = 'visibility: hidden' }, 5000)

    }



  } else {

    // aqui entra anonimo


    contenedorAnimometro.style.display = 'block';
    NavBar.style.display = 'block';

    titulo_animometro.innerHTML = ` <p> ID Sesión Animometro :  ${idAnimometro}</p>  <p> Bienvenid@   ${nombreJugador} - Anonimo`


    formBienvenida.style.display = 'none';

  }



});

