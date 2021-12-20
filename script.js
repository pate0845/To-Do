let todoList = [];


/*Run the method when button is clicked to check the input and 
send the update message along with that run addTask method if successful*/
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


/*Fetch the text from input element and push it to array,
also clear the input field and show the update message*/
function addTask() {
  var input = document.getElementById("input");
  todoList.push(input.value);
  input.value = "";
  setTimeout(function () {
    document.getElementById("span").innerHTML = "";
  }, 2000);
  display();
}


/*Get the id of selected element and remove it from the array*/
function removeElement(i) {
  todoList.splice(i, 1);
  display();
}


/*Display all the tasks using span element and updating continuously*/
function display() {
  var span = document.getElementById("data");
  span.innerHTML = "";
  todoList.forEach(function (i, n) {
    span.innerHTML += `<li id="userGoals">${i}</li><i class="material-icons" onclick=removeElement(${n}) id="delete-btn">delete</i><hr>`;
  });
}
