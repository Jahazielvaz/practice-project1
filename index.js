let nameInput = document.getElementById('name');
let output = document.getElementById('output');

let filtering = {
  name: nameInput
}

function filterFunc(){
  return output.innerHTML = `Welcome ${this.name}`;
}

let finalRes = filterFunc.bind(filtering);

function finalResult(){
  console.log(finalRes())
}

nameInput.addEventListener('keyup', finalResult);
