/// This script will let you copy the messages in WhatsApp web

// This function will add an option to copy every message
function addCopyMessage() {
    // Get all the messages
    var messages = document.querySelectorAll("div[class=copyable-text]");
    
    // Loop through all the messages
    for (var i = 0; i < messages.length; i++) {
        // Get the message
        var messageElement = messages[i].querySelector("span[dir=ltr]");
        
        // If the message already has the class, continue
        if (messageElement && messageElement.classList.contains("copy-ready")) {
            continue;
        }
        
        // Add an event listener to the button
        messageElement.addEventListener("click", copyMessageListener);
        
        // Add the cursor pointer to the message
        messageElement.style.cursor = "pointer";

        // Add tooltip to the message
        messageElement.title = "Click to copy the message";

        // Add the class to the message
        messageElement.classList.add("copy-ready");
    }
}

// Event listener function
function copyMessageListener() {
    // Copy the message
    navigator.clipboard.writeText(getMessage(this));
    
    // Visual feedback: add checkmark icon if it doesn't already exist
    if (!this.querySelector(".checkmark")) {
        const checkmark = document.createElement("span");
        checkmark.innerHTML = "(Copy)";
        checkmark.style.color = "darkgrey";
        checkmark.style.marginLeft = "10px";
        checkmark.classList.add("checkmark");
        this.appendChild(checkmark);
        
        // Remove the checkmark after 1 second
        setTimeout(() => {
            this.removeChild(checkmark);
        }, 1000);
    }
}

// This function will get the message from the message element
function getMessage(messageElement) {
    // For each span inside the message element add to the variable message
    var message = "";

    for (var i = 0; i < messageElement.children.length; i++) {
        message += messageElement.children[i].textContent;
    }

    return message;
}

// This function will remove the option to copy every message
function removeCopyMessage() {
    // Get all the messages
    var messages = document.querySelectorAll("div[class=copyable-text]");
    
    // Loop through all the messages
    for (var i = 0; i < messages.length; i++) {
        // Get the message
        var messageElement = messages[i].querySelector("span[dir=ltr]");
        
        // If the message has the class
        if (messageElement && messageElement.classList.contains("copy-ready")) {
            // Remove the event listener from the button
            messageElement.removeEventListener("click", copyMessageListener);
            
            // Remove the cursor pointer from the message
            messageElement.style.cursor = "default";

            // Remove the tooltip from the message
            messageElement.title = "";

            // Remove the class from the message
            messageElement.classList.remove("copy-ready");
        }
    }
}

// Checks if copyMessages is true from localStorage
function checkCopyMessages() {
    var state = localStorage.getItem("copyMessages");
    // If copyMessages is true
    if (state === "true") {
        addCopyMessage();
    }
    else if (state === "false") {
        removeCopyMessage();
    }
}

// Call the checkCopyMessages function every 1000 milliseconds
setInterval(checkCopyMessages, 1000);