
export function updateTaskApi(taskId,updateTask){
    fetch(`http://localhost:4000/tasks/${taskId}`,{
        method: "PUT",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({ task: updateTask})
    })
    .then(resp => {
        if(!resp.ok) throw new Error("Error update Task")
        return resp.json()
    })
}