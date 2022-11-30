console.log('estoy conectado firebase.js');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, getDocs, getDoc, onSnapshot, deleteDoc, doc, updateDoc, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZn4PRvWGdYl46EDSbtpAr6Wu1wA_O-M",
  authDomain: "alpha-docere.firebaseapp.com",
  projectId: "alpha-docere",
  storageBucket: "alpha-docere.appspot.com",
  messagingSenderId: "111790729790",
  appId: "1:111790729790:web:315ec9e92b930342233f6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore()
//con este grabamos las tareas nuevas
export const saveTask = (title, description) => {
  console.log('en firebase ', title, description)

  addDoc(collection(db, 'tasks'), { title, description })

}
//con este obtenemos las tareas de modo sincronico
export const getTasks = () => getDocs(collection(db, 'tasks'))

// este obtiene una foto de la lista tasks base de datos para poder actualizarla en tiempo real
export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)



//este lo ejecuto cada ves que entra alguien nuevo

export const ingresoVisitante = (mensaje) => {
  console.log('ingresaste a la web ')



  addDoc(collection(db, 'visitante'), { mensaje })

}
// para borrar
export const deleteTasks = (id) => deleteDoc(doc(db, 'tasks', id))
// para seleccionar la tarea que se editara
export const getTask = (id) => getDoc(doc(db, 'tasks', id));


export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields)


//con este grabamos los mensajes del chat nuevas
export const saveChatMessage = (nombre, description, id) => {
  var hoy = new Date();
  var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
  var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

  var fechaYHora = fecha + ' ' + hora;

  console.log('en Chat ', nombre, description, id, hora)
  // addDoc(collection(db,'chat'), {nombre, description,id })
  // addDoc(collection(db,'chat/' + id), {nombre, description,id })
  //setDoc(doc(db,"chat",id),{nombre, description,id });

  //setDoc(doc(db,"chat",id),{nombre, description,id });

  addDoc(collection(db, "chat." + id), { nombre, description, id, fechaYHora });

  // setDoc(collection(db,'chat',id), {nombre, description,id });




}
// este obtiene una foto de la lista mensajes chat base de datos para poder actualizarla en tiempo real
export const onGetChat = (callback, nombreChat) => {

  // const chatRef = collection(db, nombreChat);
  // const db_order = query(chatRef, orderBy("fechayHora"), limit(2));


  //onSnapshot(db_order, callback)


  onSnapshot(collection(db, nombreChat), callback)

}


//export const updateChat =  (id, newFields) =>  updateDoc(doc(db,'chat',id), newFields)



//con este grabamos las tareas nuevas
export const SaveMail = (mail, usename, animometro) => {

  var hoy = new Date();
  var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
  var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

  var fechaYHora = fecha + ' ' + hora;

  console.log('en firebase  mail', mail, usename, animometro)

  addDoc(collection(db, 'identificado'), { mail, usename, animometro })

};




