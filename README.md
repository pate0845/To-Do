# To-Do
Created to-do application using Js

#script.js
contains all the logic for the user interaction

#style.css
helps to make the page looks good visually.

#SubmitButton()
Runs the method using on click listener and check for the input fro mthe user 
, display the appropriate message and if its successful it runs addTask().

#addTask()
Fetch the text from input element and push it to array,
also clear the input field and show the update message to the user and runs display().

#display()
Display all the tasks using span element along with the icon to delete the tasks and updating continuously

#removeElement()
Runs when user want to delete added task and removes the element using splice from that index position running the display() to update changes.
