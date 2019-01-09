
var res = "";
var list = [];

while(res !== "quit") {
  res = prompt("What would you like to do?");
  if(res === "new") {
    var newToDo = prompt("todo:");
    list.push(newToDo);
  }
  else if(res === "list") {
    console.log(list);
  }
}


