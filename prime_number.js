let count=0;
for(let x=1;x<=obj;x++){
    if(obj%x!==0){
        count++
    }
}
if(count==2){consolel.log("the number is prime")}
else{console.log("not prime")}