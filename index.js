// Adding an eventListener to each button
for (var index = 0; index < 7; index++) { // 7: number of drum buttons
    document.querySelectorAll("button")[index].addEventListener("click", function () {

        // this.innerHTML is the innerHTML of each button
        var buttonInnerHTML = this.innerHTML; 

        // we call the function that makes sound and passing buttonInnerHTML as input
        makeSound(buttonInnerHTML); 

        // we call the animation function as well
        buttonAnimation(buttonInnerHTML);

    });
}

// Adding eventListeners for keypresses to the whole document
document.addEventListener("keypress", function (event) {

    // we call the function that plays the sound by passing it the "event.key" 
    // as input aka the letter of the key pressed (event.key : k,w,l,j...)
    makeSound(event.key); 

    // animation function
    buttonAnimation(event.key);
})

// the function that actually plays the sound
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            alert("Please choose a letter among the ones shown!");
    }
}

// button animation function (pressed-unpressed)
function buttonAnimation(currentKey){

    // that will be ".w",".a" or ".d" as the format of the class name of buttons
    var activeButton = document.querySelector("." + currentKey);

    // adding "pressed" into the class of activeButton to activate the CSS animation
    // effect animation: button pressed
    activeButton.classList.add("pressed");

    // removing the class "pressed" animation after a timeout
    // effect animation: button unpressed
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
