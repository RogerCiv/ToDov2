
export function deleteTaskApi(taskId){
    fetch(`http://localhost:4000/tasks/${taskId}`,{
        method: "DELETE"
    })
    .then(resp => {
        if(!resp.ok) throw new Error("Error delete task")
        
    })
}