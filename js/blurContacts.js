/// This script will blur every message in WhatsApp web

// This function will blur the message
function blurContact() {
    // Get all the contacts
    var contacts = document.querySelectorAll("div[role=listitem]");
    // Loop through all the contacts
    for (var i = 0; i < contacts.length; i++) {
        // Blur the message if it doesn't have filter blur
        if (contacts[i].style.filter !== "blur(5px)" && !contacts[i].classList.contains("mouseover")) {
            contacts[i].style.filter = "blur(5px)";
        }
    }
}

// These functions will serve the event listener for the contacts
function mouseoverContact() {
    // Unblur the message
    this.style.filter = "blur(0px)";
    // Add class list to the message
    this.classList.add("mouseover");
}

function mouseoutContact() {
    // Blur the message
    this.style.filter = "blur(5px)";
    // Remove class list from the message
    this.classList.remove("mouseover");
}

// This function will unblur the message when the mouse is over a message
function unblurContact() {
    // Get all the contacts
    var contacts = document.querySelectorAll("div[role=listitem]");
    // Add the event listener to all the contacts
    for (var i = 0; i < contacts.length; i++) {
        // Does the message have the classlist blurred
        if (contacts[i].style.filter == "blur(5px)") {
            // When the mouse is over the message
            contacts[i].addEventListener("mouseover", mouseoverContact);
            // When the mouse is out of the message
            contacts[i].addEventListener("mouseout", mouseoutContact);
        }
    }
}

// This function will blur the contact list
function blurMainContacts() {
    // Blur the message
    blurContact();
    // Unblur the message
    unblurContact();
}

// Checks if blurState is true from localStorage
function checkStateContacts() {
    var state = localStorage.getItem("blurState");
    // If blurState is true
    if (state === "true") {
        blurMainContacts()
    }
}

// Call the checkStateContacts function every 1000 milliseconds
setInterval(checkStateContacts, 1000);