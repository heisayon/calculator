let values = document.getElementById("display");

function appendToDisplay(input) {
  values.value += input;
}

function clearDisplay() {
  values.value = "";
}

function calculate() {
  try {
    values.value = eval(values.value);
    if(isNaN(values.value)){
        throw new Error
    }
  } catch (error) {
    values.value = `Error`;
  }
}

function removeItem() {
    let newData = values.value
    values.value = String(newData).slice(0, -1)
}


let username = 'Zion'
console.log(username.slice(0, -1));