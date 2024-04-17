const inp = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", () => {
    if (inp.value.trim() === '') {
        alert("Error: Todo item cannot be empty.");
    } else {
        let newLi = document.createElement("li");
        let newBtn = document.createElement("button");
        let newP = document.createElement("p");
        let acceptBtn = document.createElement("button");

        newP.innerHTML = inp.value;
        newBtn.textContent = "X";
        acceptBtn.textContent = "Qəbul et";
        acceptBtn.classList.add("accept-button");

        newLi.appendChild(newP);
        newLi.appendChild(acceptBtn);
        newLi.appendChild(newBtn);

        todoList.appendChild(newLi);

        inp.value = "";

        newBtn.addEventListener("click", () => {
            newLi.remove();
        });

        acceptBtn.addEventListener("click", () => {
            markTodoDone(newLi);
        });
    }
});

function markTodoDone(item) {
    if (!item.classList.contains("done")) {
        item.classList.add("done");
    } else {
        item.classList.remove("done");
    }
}


