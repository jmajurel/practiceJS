var count = -10;
console.log("Exercice 1:");
while(count>=-10 && count<20){
  console.log(count);
  count+=1;
}

console.log("Exercice 2:");
count = 10;
while(count>=10 && count<=40) {
  if((count %2) == 0) {
    console.log(count)
  }
  count+=1;
}

console.log("Exercice 3:");
count = 300;
while(count>=300 && count<=333) {
  if((count %2) != 0) {
    console.log(count)
  }
  count+=1;
}

console.log("Exercice 4:");
count = 5;
while(count>=5 && count<=50) {
  if(((count %5) == 0) && ((count %3) == 0)) {
    console.log(count)
  }
  count+=1;
}
