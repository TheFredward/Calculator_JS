/*
Make a simple calculator:
1. create the outline and buttons
2. Show the numbers clicked on a display
3. Be able to do arithmatic and display result
*/
window.addEventListener("beforeunload",clearVal());
var a = "GO BEYOND! PLUS ULTRA! -All Might"
//these are just test to check if I remember
alert(a);
var equal = "=";
var sum = "+";
var diff = "-";
var divide = "/";
var multiply = "*";
var firstVal;
var tempVal;
var lastVal;


function numClick(value){
  //this is to check if we are displaying a previous answer and if so
  //clear that anser and start again
  if(tempVal != null){
    clearVal();
    document.getElementById('calcScreen').whiteBoard.value += value;
  }else{
    document.getElementById('calcScreen').whiteBoard.value += value;
  }
}
function sumNum(value){
  document.getElementById('calcScreen').whiteBoard.value += value;
}
function diffVal(value){
  document.getElementById('calcScreen').whiteBoard.value += value;
}
function divNum(value){
  document.getElementById('calcScreen').whiteBoard.value += value;
}
function MultNum(value){
  document.getElementById('calcScreen').whiteBoard.value += value;
}
function answer(value){
  console.log("The value input is: "+value);
  lastVal = document.getElementById('calcScreen').whiteBoard.value;
  console.log("saving the value to pass to getString: "+lastVal);
  getString(lastVal);
  document.getElementById('calcScreen').whiteBoard.value = tempVal;
}
//clear the form
function clearVal(){
  //after call clear the tempvalue and index so that numClick continues
  tempVal = null;
  index = null;
  document.getElementById('calcScreen').reset();
}
//function used to seperate the input string into the
//seperate numbers and add them together
var getString = function seperateString(stringVal) {
  var length = stringVal.length;
  //Determine which input was requested...
  //maybe find a way to save the value and the index length
  //after clicking it. ie after calling sumNum() or MultNum()
  if(stringVal.indexOf(diff) != -1){
    //save the position of the arithmatic and use that to seperate string
    var index = stringVal.indexOf(diff);
    firstVal = parseInt(stringVal.substring(0,index));
    lastVal = parseInt(stringVal.substring(index+1,length));
    tempVal = firstVal - lastVal;
  }else if(stringVal.indexOf(sum) != -1) {
    //save the position of the arithmatic and use that to seperate string
    var index = stringVal.indexOf(sum);
    firstVal = parseInt(stringVal.substring(0,index));
    lastVal = parseInt(stringVal.substring(index+1,length));
    tempVal = firstVal + lastVal;
    console.log("Position of sum:" +index);
  }else if(stringVal.indexOf(divide) != -1){
    var index = stringVal.indexOf(divide);
    firstVal = parseInt(stringVal.substring(0,index));
    lastVal = parseInt(stringVal.substring(index+1,length));
    //display arithmatic
    tempVal = firstVal / lastVal;
    console.log("Position of divide:" +index);
  }else if(stringVal.indexOf(multiply) != -1){
    var index = stringVal.indexOf(multiply);
    firstVal = parseInt(stringVal.substring(0,index));
    lastVal = parseInt(stringVal.substring(index+1,length));
    tempVal = firstVal * lastVal;
    console.log("Position of multiply:" +index);
  }
}
