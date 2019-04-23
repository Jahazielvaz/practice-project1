// ELEMENTS
let body = document.getElementById('body');
let nameInput = document.getElementById('name');
let buttonOne = document.getElementById('button1');

//RESIZING EVENT
let sizeDisplay = document.getElementById('size-display');

let resizer = () => {
  let result = sizeDisplay.innerHTML = `Window Width: ${window.innerWidth}px`;
  console.log(result);
};

window.addEventListener('resize', resizer, false);


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
  let shifter = images.shift();
  images.push(shifter);
  imageElement.setAttribute('src', images[0]);
  imageContainer.appendChild(imageElement);
}

function killSwitch(){
  switcher.removeEventListener('click', switcherFunc)
  imageContainer.removeChild(imageElement)
  imageContainer.innerText = "Thank you for watching";
}




switcher.addEventListener('dblclick', killSwitch, false);
switcher.addEventListener('click', switcherFunc, false);



// Scroll logging event
let scrollLogger = () => {
  console.log("Page has been scrolled");
}

window.addEventListener('scroll', scrollLogger, false);

//Transition event
// var blocks = document.querySelectorAll('section.blocks')

let transitionColorChange = () => {
  return body.style.cssText = "background: lightblue; font-size: 10px; border-radius: 20px;";
  console.log('transition has ended')
}

window.addEventListener('transitionend', transitionColorChange, false);

//Key press event
let output = document.getElementById('keys-output');

let keycodes = {d : 68, f : 70, g : 71, h : 72, j : 74, k : 75};
let {d,f,g,h,j,k} = keycodes

let _listener;

window.addEventListener('keydown', _listener = (e) => {

  let res = (letter) => {
    return output.innerHTML  = letter;
  }

  switch(e.keyCode){
    case d:
    res("D")
    console.log(output)
    break;

    case f:
    res("F")
    console.log(output)
    break;

    case g:
    res("G")
    console.log(output)
    break;

    case h:
    res("H")
    console.log(output)
    break;

    case j:
    res("J")
    console.log(output)
    break;

    case k:
    res("K")
    console.log(output)
    break;
  }
})

let keyRemover = () => {

  output.innerHTML = '';
}

window.addEventListener('keyup', keyRemover, false);


// Clipboard Event
let clipText = document.getElementById("clip-text");

let clipCopy = () => {
  console.log('Text has been copied');
}

let clipCut = () => {
  console.log('Text has been cut');
}

let clipPaste = () => {
  console.log('Text has been pasted');
}

clipText.addEventListener('copy', clipCopy, false);
clipText.addEventListener('cut', clipCut, false);
clipText.addEventListener('paste', clipPaste, false);

// For Each
let colorsArr = ['blue', 'orange', 'purple', 'brown', 'yellow', 'red', 'green', 'lightgreen']
let feButton = document.getElementById('fe-button');
let shapes = document.querySelectorAll('.fe-shapes');

let colorSwitcher = () => {
  let randomizer = Math.floor(Math.random() * colorsArr.length);
  randomizer -= 1;
  shapes.forEach(change => change.style.background = colorsArr[randomizer])
}

feButton.addEventListener('click', colorSwitcher, false);


let equations = [23, 23,1,2, 334,344, 99, 347]
let newEq = []
equations.forEach(res => newEq.push(res * 2))

console.log(newEq)


















//
