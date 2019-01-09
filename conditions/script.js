
var age = document.getElementById("age").value;

if(age < 0)
  alert("Error Age cannot be negatif");
else if (age === 21)
  console.log("happy 21st brithday!");
else if (((age % 2) === 0) && (((age/2) % 2) === 0))
  console.log("perfect square!");
else ((age % 2) === 0)
  console.log("age is odd!");
  

