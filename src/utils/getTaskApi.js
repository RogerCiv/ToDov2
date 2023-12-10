import { renderCardTask } from "../components/renderCardTask/renderCardTask";

export async function getTaskApi(url,container){
    try{
        const resp = await fetch(url)
        if(!resp.ok) throw new Error("Error get tasks")
        const data = await resp.json()

        console.log(data);
        data.map(task => {
            renderCardTask(container,task)
        })

    }catch(err){
        console.log("Error: ",err.message);
    }
}