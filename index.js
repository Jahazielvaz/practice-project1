let body = document.getElementById('body');

let nameInput = document.getElementById('name');


let myEvent = () => {
  return alert("box was clicked")
}

nameInput.addEventListener('mouseenter', myEvent, false)

let button = document.querySelector('button');



let myEventRemover = () => {
  return nameInput.removeEventListener('mouseenter', myEvent)

}

nameInput.addEventListener('mouseleave', myEventRemover, false)




// output.addEventListener('keyup', clicker);
