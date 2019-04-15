let nameInput = document.getElementById('name');
let output = document.getElementById('output');

let mixer = {
  name: "Vincent"
}

function finalRes(obj){
  obj.result = function(){
    return `Welcome ${this.name}`
  }
}

finalRes(mixer);
output.innerHTML = mixer.result()



// output.addEventListener('keyup', clicker);
