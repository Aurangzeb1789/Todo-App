let arr = [];
let store = JSON.parse(localStorage.getItem("list"));
console.log(store);
if (store === null) {
  arr = [];
} else {
  arr = store;
}

displayTodo();

function addTodo() {
  let todoInput = document.querySelector("#todo-Input");

  arr.push(todoInput.value);
  localStorage.setItem("list", JSON.stringify(arr));
  todoInput.value = "";
  displayTodo();
}

function displayTodo() {
  let showList = document.querySelector("#show");
  showList.innerHTML = "";
  let arq = arr;

  for (let i = 0; i < arr.length; i++) {
    showList.innerHTML =
      showList.innerHTML +
      ` 
   
          <span class="elem"> ${arq[i]} </span>  
          <button class="del" onclick="del(${i});"> Delete
        </button> 
         
          `;
  }
}

function del(position) {
  arr.splice(position, 1);

  localStorage.setItem("list", JSON.stringify(arr));

  displayTodo();
}
