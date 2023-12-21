function updateStatus() {
    // Get the "p" tag by its id
    var statusElement = document.getElementById("status");

    // Create a new "h1" element
    var h1Element = document.createElement("h1");

    // Copy the content and attributes from the "p" element to the new "h1" element
    h1Element.textContent = statusElement.textContent;
    h1Element.id = statusElement.id;

    // Replace the "p" element with the new "h1" element
    statusElement.parentNode.replaceChild(h1Element, statusElement);
}
