import { renderCardTask } from "../components/renderCardTask/renderCardTask";

export async function findTaskApi(url,query,container){
    try{
        const resp = await fetch(`${url}?task=${query}`)
        if(!resp.ok) throw new Error("Fail to find task")
        const data = await resp.json()

        console.log(data);
        container.innerHTML = ""
        data.map(task => {

            renderCardTask(container,task)
        })
    }catch(err){
        console.log("Error: ", err.message);
    }

}