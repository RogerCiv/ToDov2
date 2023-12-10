export function completTask(element) {
    const checkComplete = element.querySelectorAll(".form-check-input");
  
    checkComplete.forEach((check) => {
      check.addEventListener("change", (e) => {
        const card = element.querySelector(".card");
        const labelCheckBox = element.querySelector(".form-check-label");
        console.log(e.target.dataset.id);
        if (e.target.checked) {
          card.classList.remove("bg-success");
          card.classList.add("bg-warning");
          labelCheckBox.textContent = "Tarea Completada";
        } else {
          card.classList.remove("bg-warning");
          card.classList.add("bg-success");
          labelCheckBox.textContent = "Completar Tarea";
        }
      });
    });
  }