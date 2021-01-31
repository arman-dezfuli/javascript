var todoArrey ,todoList , i;
todoArrey = [];
todoList = document.getElementById('todo-list');

function renderTodo () {
    todoList.innerHTML = "";
    for (i = 0; i < todoArrey.length; i++) {
    todoList.innerHTML += "<li>"+ todoArrey[i]+ "<span onclick='deTodo("+ i +")'>   حذف</span><li>";
    }
}
function addKala (kala) {
    todoArrey.push(kala);
    renderTodo();
}
function deTodo (x) {
    todoArrey.splice(x , 1);
    renderTodo();
}
renderTodo();