let display = document.getElementById("output");

const displayData = (data) => {
  display.value += data;
}
const clearAll = () => {
  display.value = "";
  display.placeholder = "0";
}
const removeLastItem = () => {
  display.value = display.value.slice(0, -1);
}
const displayResult = () => {

  try {  display.value = eval(display.value);
  }
catch{
  display.value = "";
  display.placeholder = "Invalid Expression";
  }
  finally {
    console.log("finally block");
}
}