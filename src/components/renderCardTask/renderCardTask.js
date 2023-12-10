import { completTask } from "../../helper/completeTask";
import { deleteTask } from "../../helper/deleteTask";
import { updateTaskApi } from "../../utils/updateTaskApi";


export function renderCardTask(container, data) {
  const divTask = document.createElement("div");
  divTask.classList.add("col-12", "col-md-6", "col-lg-2");

  divTask.innerHTML = `
  <div class="card text-white bg-success mb-3" style="max-width: 20rem;">
  <div class="card-header">ID Task : ${data.id}</div>
  <div class="card-body">
    <p class="card-text text-primary">${data.task}</p>
    <button class="btn btn-warning btnEdit" data-id="${data.id}">Editar</button>
    <button class="btn btn-danger btnDelete" data-id="${data.id}">Borrar</button>
    <input class="form-check-input" type="checkbox" value="" id="checkComplete" data-id="${data.id}">
  <label class="form-check-label" for="flexCheckDefault" >
    Completar tarea
  </label>
  </div>
  
</div>
  
  `;
  container.appendChild(divTask);
  completTask(divTask);
  deleteTask(divTask);

  const btnEdit = divTask.querySelectorAll(".btnEdit")

    btnEdit.forEach(edit => {
        edit.addEventListener("click", (e) => {
            const inputTask = document.createElement("input")
            const textTask = divTask.querySelector('.card-text')
            const taskId = e.target.dataset.id;
            console.log(taskId);
            inputTask.placeholder = "Editar tarea..."
            textTask.appendChild(inputTask)
            inputTask.addEventListener("keydown", (e) => {
                if(e.key === "Enter"){
                    console.log(inputTask.value);
                    updateTaskApi(taskId,inputTask.value)
                    location.reload()

                }
            })
           // console.log(textTask);
            //console.log(e.target.dataset.id);
        })
    })

  
}




