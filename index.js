// ELEMENTS
let body = document.getElementById('body');
let nameInput = document.getElementById('name');
let buttonOne = document.getElementById('button1');
let imageElement = document.createElement('img');

// EVENT REMOVER SECTION
let myEvent = () => {
  return alert("box was clicked");
}

nameInput.addEventListener('mouseenter', myEvent, false);

let myEventRemover = () => {
  return nameInput.removeEventListener('mouseenter', myEvent);

}

nameInput.addEventListener('mouseleave', myEventRemover, false);

// IMAGE SWITCHER CLICK AND DBLCLICK EVENT
let imageContainer = document.getElementById("image-container");

let images = ['./media-content/55-cancri-e.jpg', './media-content/blackhole.jpg', './media-content/magnetar.jpg'];
let switcher = document.getElementById('switcher');

function switcherFunc(){
  var i = 0;
  let shifter = images.shift();
  images.push(shifter);
  imageElement.setAttribute('src', images[i]);
  imageContainer.appendChild(imageElement);
  // console.log(imageElement);
  console.log(images[i]);
}

function killSwitch(){
  switcher.removeEventListener('click', switcherFunc)
  imageContainer.removeChild(imageElement)
}




switcher.addEventListener('dblclick', killSwitch, false);
switcher.addEventListener('click', switcherFunc, false);


// output.addEventListener('keyup', clicker);
