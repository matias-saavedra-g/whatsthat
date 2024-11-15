/// This script will make a switch to blur the contacts or the messages in WhatsApp web
// It will interact with the blurContacts.js and blurMessages.js scripts
// This switch will be a toggle button that will allow the scripts to run or not using localStorage
// The button will be using fa-solid fa-eye and fa-solid fa-eye-slash from Font Awesome and inherit the styles from WhatsApp web

// These constants will get the switch button and the Font Awesome icons
const faSolidEye = '<svg id="faSolidEye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>';
const faSolidEyeSlash = '<svg id="faSolidEyeSlash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>';
const faSolidClipboard = '<svg id="faSolidClipboard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>';
const faSolidClipboardChecked = '<svg id="faSolidClipboardChecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>';

// This function will create the switch and append it into the menu
function createBlurSwitch() {
    // Create the switch
    var blurSwitchButton = document.createElement("button");
    // Add the class to the switch
    blurSwitchButton.classList.add("switch");
    // Set the style of the switch
    blurSwitchButton.style = "color: #54656e; background-color: none; border: 0px; cursor: pointer; display: block; height: 24px; margin: 10px auto; width: 24px;";
    // Add the event listener to the switch
    blurSwitchButton.addEventListener("click", function() {
        // Get the current state of the switch
        var state = localStorage.getItem("blurState");
        // If the state is null
        if (state === null) {
            // Set the state to true
            localStorage.setItem("blurState", "true");
        } else {
            // If the state is true
            if (state === "true") {
                // Set the state to false
                localStorage.setItem("blurState", "false");
                // Change the innerHTML of the switch
                blurSwitchButton.innerHTML = faSolidEyeSlash;
                console.log("Blur state is false");
                styleSVGs();
            } else {
                // Set the state to true
                localStorage.setItem("blurState", "true");
                // Change the innerHTML of the switch
                blurSwitchButton.innerHTML = faSolidEye;
                console.log("Blur state is true");
                styleSVGs();
            }
        }
    });
    // Get the current state of the switch
    var state = localStorage.getItem("blurState");
    // If the state is true
    if (state) {
        blurSwitchButton.innerHTML = faSolidEyeSlash;
    } else if (!state) {
        blurSwitchButton.innerHTML = faSolidEye;
    }
    else {
        blurSwitchButton.innerHTML = faSolidEyeSlash;
    }
    // Append the switch to the selector
    document.querySelector("#app > div > div.two._aigs > header > div > div > div > div > span > div > div").appendChild(blurSwitchButton);
}

// This function will create the copy switch and append it into the menu
function createCopySwitch() {
    // Create the switch
    var copySwitchButton = document.createElement("button");
    // Add the class to the switch
    copySwitchButton.classList.add("switch");
    // Set the style of the switch
    copySwitchButton.style = "color: #54656e; background-color: none; border: 0px; cursor: pointer; display: block; height: 24px; margin: 16px auto; width: 24px;";
    // Add the event listener to the switch
    copySwitchButton.addEventListener("click", function() {
        // Get the current state of the switch
        var state = localStorage.getItem("copyMessages");
        // If the state is null
        if (state === null) {
            // Set the state to true
            localStorage.setItem("copyMessages", "true");
        } else {
            // If the state is true
            if (state === "true") {
                // Set the state to false
                localStorage.setItem("copyMessages", "false");
                // Change the innerHTML of the switch
                copySwitchButton.innerHTML = faSolidClipboard;
                console.log("Copy messages is false");
                styleSVGs();
            } else {
                // Set the state to true
                localStorage.setItem("copyMessages", "true");
                // Change the innerHTML of the switch
                copySwitchButton.innerHTML = faSolidClipboardChecked;
                console.log("Copy messages is true");
                styleSVGs();
            }
        }
    });
    // Get the current state of the switch
    var state = localStorage.getItem("copyMessages");
    // If the state is true
    if (state) {
        copySwitchButton.innerHTML = faSolidClipboardChecked;
    } else if (!state) {
        copySwitchButton.innerHTML = faSolidClipboard;
    }
    else {
        copySwitchButton.innerHTML = faSolidClipboardChecked;
    }
    // Append the switch to the selector
    document.querySelector("#app > div > div.two._aigs > header > div > div > div > div > span > div > div").appendChild(copySwitchButton);
}

// This function will apply styling to both switches SVGs
function styleSVGs() {
    // Get all the SVG elements
    var svgElements = document.querySelectorAll("button.switch > svg");
    // Loop through all the SVG elements
    for (var i = 0; i < svgElements.length; i++) {
        // Set the style of the SVG element
        svgElements[i].style = "fill: #54656e;";
        svgElements[i].setAttribute("width", "24");
        svgElements[i].setAttribute("height", "24");
    }
}

// This function will wait for the menu to load and create the switch
function waitingMenu() {
    // This is to make sure that the switch is created even if the menu is loaded after the script is loaded
    const loadedMenu = document.querySelector("#app > div > div.two._aigs > header > div > div > div > div > span > div > div");
    const switchSelect = document.querySelector("button.switch");

    // If the switch is already created, don't create it again
    if (switchSelect) {return;}

    // Call the createBlurSwitch function if the switch is not created and the menu is loaded
    else if (loadedMenu) {
        createBlurSwitch();
        createCopySwitch();
        styleSVGs();
    }

    // Recursively call the waitingMenu function
    else {setTimeout(waitingMenu, 0);}
}

// Call the waitingMenu function
waitingMenu();