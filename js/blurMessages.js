/// This script will blur every message in WhatsApp web

// This function will blur the message
function blurMessage() {
    // Get all the messages
    var messages = document.querySelectorAll("div[role=row]");
    // Loop through all the messages
    for (var i = 0; i < messages.length; i++) {
        // Blur the message if it doesn't have filter blur
        if (messages[i].style.filter !== "blur(5px)" && !messages[i].classList.contains("mouseover")) {
            messages[i].style.filter = "blur(5px)";
        }
    }
}

// These functions will serve the event listener for the contacts
function mouseoverMessage() {
    // Unblur the message
    this.style.filter = "blur(0px)";
    // Add class list to the message
    this.classList.add("mouseover");
}

function mouseoutMessage() {
    // Blur the message
    this.style.filter = "blur(5px)";
    // Remove class list from the message
    this.classList.remove("mouseover");
}

// This function will unblur the message when the mouse is over a message
function unblurMessage() {
    // Get all the messages
    var messages = document.querySelectorAll("div[role=row]");
    // Add the event listener to all the messages
    for (var i = 0; i < messages.length; i++) {
        // Does the message have the classlist blurred
        if (messages[i].style.filter == "blur(5px)") {
            // When the mouse is over the message
            messages[i].addEventListener("mouseover", mouseoverMessage);
            // When the mouse is out of the message
            messages[i].addEventListener("mouseout", mouseoutMessage);
        }
    }
}

// This function will blur the messages
function blurMainMessages() {
    // Blur the message
    blurMessage();
    // Unblur the message
    unblurMessage();
}

// Checks if blurState is true from localStorage
function checkStateMessages() {
    var state = localStorage.getItem("blurState");
    // If blurState is true
    if (state === "true") {
        blurMainMessages()
    }
}

// Call the checkStateMessages function every 1000 milliseconds
setInterval(checkStateMessages, 1000);