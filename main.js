import { findTaskApi } from "./src/utils/findTaskApi";
import { getTaskApi } from "./src/utils/getTaskApi";
import { saveTaskApi } from "./src/utils/saveTaskApi"

const textareaTask = document.getElementById('textareaTask')
const btnSave = document.getElementById("btnSave")
const cardsContainer = document.querySelector(".cards")
const btnSearch = document.getElementById('btnSearch')
const inputSearch = document.getElementById("inputSearch")

const url = "http://localhost:4000/tasks";

getTaskApi(url,cardsContainer)

btnSave.addEventListener("click", (e) => {
  e.preventDefault()
  if(textareaTask.value === ""){

  }else{

    const dataTask = {
      task: textareaTask.value,
    }
    saveTaskApi(dataTask)
    location.reload()
  }
 // console.log(dataTask);
})


btnSearch.addEventListener("click", (e) => {
  e.preventDefault()
  if(inputSearch.value === ""){
    location.reload()
  }else{
    console.log(inputSearch.value);
    findTaskApi(url,inputSearch.value,cardsContainer)

  }
})


