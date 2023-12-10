import { deleteTaskApi } from "../utils/deleteTaskApi";

export function deleteTask(element) {
    const btnDelete = element.querySelectorAll(".btnDelete");
  
    btnDelete.forEach((del) => {
      del.addEventListener("click", (e) => {
        console.log(e.currentTarget.dataset.id);
        const taskId = e.currentTarget.dataset.id;
        deleteTaskApi(taskId);
        location.reload();
      });
    });
  }