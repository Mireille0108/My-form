let myCounter= 60;
let myBody=document.querySelector(".container");
class counter {   
count=setInterval(() => {
  myCounter-=5;
  switch (true) {
      case (myCounter %2 ==0 && !myCounter % 5 === 0):
          myBody.style.backgroundColor= "yellow"
          
          break;
      case (myCounter %5==0 && myCounter > 10):
      myBody.style.backgroundColor="green"
  break;
  case (myCounter < 10 ):
      myBody.style.backgroundColor="red"
  }

  console.log(myCounter);
    
}, 3000);
}
let countInstance = new counter();//Instantiating


/*
if (myCounter % 2==0) {
  myBody.style.backgroundColor="green"
}if (myCounter % 5 ==0) {
  myBody.style.backgroundColor="yellow"
}if (myCounter <10) {
  myBody.style.backgroundColor="red"
  console.log(myCounter)
}*/









/*setTimeout(() => {console.log("this is the first message")}, 5000);
  setTimeout(() => {console.log("this is the second message")}, 3000);
  setTimeout(() => {console.log("this is the third message")}, 1000);
 */