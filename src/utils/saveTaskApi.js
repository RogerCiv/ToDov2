
export async function saveTaskApi(data){
  return fetch("http://localhost:4000/tasks", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then( resp => {
    if(!resp.ok) throw new Error("Error save task")
    return resp.json()
  })
}