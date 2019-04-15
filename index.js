var body = document.getElementById('body');

var nameInput = document.getElementById('name');
nameInput.addEventListener('click', myEvent, false)

function myEvent(){
  return body.style = "background: blue"
}


var button = document.querySelector('button');



button.addEventListener('click', myEventRemover)


function myEventRemover(){
  nameInput.removeEventListener('click', myEvent)

}





// output.addEventListener('keyup', clicker);
