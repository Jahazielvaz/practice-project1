// ELEMENTS
let body = document.getElementById('body');
let nameInput = document.getElementById('name');
let buttonOne = document.getElementById('button1');


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
let imageElement = document.createElement('img');
let images = ['./media-content/55-cancri-e.jpg', './media-content/blackhole.jpg', './media-content/magnetar.jpg'];
let switcher = document.getElementById('switcher');

function switcherFunc(){
  for(var i = 0; i < images.length; i++){
    imageElement.setAttribute('src', images[i]);
    imageContainer.appendChild(imageElement);
    console.log(images[i])
  }


}

switcher.addEventListener('click', switcherFunc, false);


// output.addEventListener('keyup', clicker);
