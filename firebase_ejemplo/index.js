import { saveTask, ingresoVisitante, onGetTasks, deleteTasks, getTask, updateTask } from './firebase.js'
import { auth } from "./firebase.js"

console.log('estoy conectado index.js utilizando este tutorial : https://www.youtube.com/watch?v=ey4k6mW9ds4&ab_channel=FaztCode')
// parametros de acceso a la vista
const taskForm = document.getElementById('task-form')
const taskContainer = document.getElementById('task-container')
const alertSuccess = document.getElementById('alert-success')
const alert_mensaje = document.getElementById('alert-mensaje')

let editStatus = false
let idVigente = '';

//inicio cuando se abre la pagina.
window.addEventListener('DOMContentLoaded', async (e) => {
    //  console.log(getTasks())

    //asi se traian las tareas originalmente
    //  const querySnapshot = await getTasks()

    //permite la recepcion en tiempo real 
    onGetTasks((querySnapshot) => {

        taskContainer.innerHTML = ""

        querySnapshot.forEach(doc => {

            const task = doc.data()

            taskContainer.innerHTML += `
          <div class="container p-4">
          
             <div class="card card-body mt-2  border-primary">
     
                     <h3 class ="h5">${task.title}</h3>
                     <p>${task.description}</p>
                     <p>Link para compartir :</p>
                    
                     <!-- The text field -->
                     <input type="text" value="http://localhost/firebase_ejemplo/animometro.html?id=${doc.id}" id="myInput_${doc.id}" disabled>
                     
  
                     <!-- The button used to copy the text -->
                     <button onclick="myFunction('${doc.id}')">Copiar Animometro</button>
<br />
                    <div class="">
                    <button class='btn btn-primary btn-delete' data-id="${doc.id}">Eliminar </button>
                    <button class='btn btn-secondary btn-edit' data-id="${doc.id}">Editar </button>
                    <button class='btn btn-secondary btn-edit' onclick="window.location.href='http://localhost/firebase_ejemplo/animometro.html?id=${doc.id}'">ir a Animometro </button>
                    </div>
                </div>
            
            </div>
             `

        })




        const btnDelete = taskContainer.querySelectorAll('.btn-delete')

        btnDelete.forEach(btn => {
            //    btn.addEventListener('click',(event) =>{
            btn.addEventListener('click', ({ target: { dataset } }) => {
                // console.log(dataset.id)
                deleteTasks(dataset.id)



                //obtiene la ID del objeto que presionaron eliminar
                //   console.log(event.target.dataset.id)

            })


        })


        const btnEdit = taskContainer.querySelectorAll('.btn-edit')
        btnEdit.forEach(btn => {

            btn.addEventListener('click', async (e) => {

                const doc = await getTask(e.target.dataset.id)
                console.log(doc.data())
                const task = doc.data()

                taskForm['task-title'].value = task.title
                taskForm['task-description'].value = task.description


                editStatus = true
                idVigente = e.target.dataset.id

            })

        })


        // console.log(btnEdit)


    })

    // aqui va el codigo para cuando se carga algo

    // console.log(querySnapshot)



    ingresoVisitante('llegaste a nuestra web')

})



taskForm.addEventListener('submit', (e) => {

    e.preventDefault()

    console.log('Presionamos el Submit')

    const title = taskForm['task-title']
    const description = taskForm['task-description']

    console.log('esto estamos enviando de index : ', title.value, description.value)



    if (editStatus) {
        console.log('actualizando')

        updateTask(idVigente, {
            title: title.value,
            description: description.value

        })

        alert_mensaje.innerHTML = "tarea ID=" + idVigente + " Modificada Correctamente"

        editStatus = false
    } else {
        console.log('nueva task')

        alert_mensaje.innerHTML = "Nueva Tarea creada Correctamente [titulo] = " + title.value


        saveTask(title.value, description.value)


    }

    alertSuccess.style = 'visibility=visible'

    setTimeout(function () { alertSuccess.style = 'visibility: hidden' }, 3000)

    //limpia el formulario
    taskForm.reset()





})