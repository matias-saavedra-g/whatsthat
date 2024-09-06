// This function will unblur all the messages and contacts inside WhatsApp web

// This function will unblur all the messages
function unblurMessages() {
    // Get all the messages
    var messages = document.querySelectorAll("div[role=row]");
    // Loop through all the messages
    for (var i = 0; i < messages.length; i++) {
        // Unblur the message
        messages[i].style.filter = "blur(0px)";
        // Add classlist to the message
        messages[i].classList.add("unblurred");
        // Remove mouseover and mouseout event listeners
        messages[i].removeEventListener("mouseover", mouseoverMessage);
        messages[i].removeEventListener("mouseout", mouseoutMessage);
    }
}

// This function will unblur all the contacts
function unblurContacts() {
    // Get all the contacts
    var contacts = document.querySelectorAll("div[role=listitem]");
    // Loop through all the contacts
    for (var i = 0; i < contacts.length; i++) {
        // Unblur the message
        contacts[i].style.filter = "blur(0px)";
        // Add classlist to the message
        contacts[i].classList.add("unblurred");
        // Remove mouseover and mouseout event listeners
        contacts[i].removeEventListener("mouseover", mouseoverContact);
        contacts[i].removeEventListener("mouseout", mouseoutContact);
    }
}

// This function will unblur all the messages and contacts
function unblurAll() {
    unblurMessages();
    unblurContacts();
}

// Check if the blurState is false
function checkState() {
    var state = localStorage.getItem("blurState");
    // If blurState is false
    if (state === "false") {
        unblurAll();
    }
}

// Call the checkState function every 1000 ms
setInterval(checkState, 1000);