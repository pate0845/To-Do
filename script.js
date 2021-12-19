let todoList = [];

function submitButton() {
  var input = document.getElementById("input").value;
  var spn = document.getElementById("span");

  if (input == "") {
    spn.innerHTML = "Please enter text in input field";
    setTimeout(function () {
      document.getElementById("span").innerHTML = "";
    }, 2000);
  } else {
    spn.innerHTML = "Task Added";
    addTask();
  }
}

function addTask() {
  var input = document.getElementById("input");
  todoList.push(input.value);
  input.value = "";
  setTimeout(function () {
    document.getElementById("span").innerHTML = "";
  }, 2000);
  display();
}

function removeElement(i) {
  todoList.splice(i, 1);
  display();
}

function display() {
  var span = document.getElementById("data");
  span.innerHTML = "";
  todoList.forEach(function (i, n) {
    span.innerHTML += `<li id="userGoals">${i}<i class="material-icons" onclick=removeElement(${n}) id="delete-btn">delete</i></li>`;
  });
}
