
console.log("Exercice 1:");
for(var count=-10; count<20; count+=1) {
  console.log(count);
}

console.log("Exercice 2:");
for(var count=10; count<=40; count+=1) {
  if((count % 2)===0) {
    console.log(count);
  }
}

console.log("Exercice 3:");
for(var count=300; count<=330; count+=1) {
  if((count % 2)!==0) {
    console.log(count);
  }
}

console.log("Exercice 4:");
for(var count=5; count<=50; count+=1) {
  if(((count % 5) === 0) && ((count % 3) === 0)) {
    console.log(count);
  }
}
