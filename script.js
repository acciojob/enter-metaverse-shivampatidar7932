//your JS code here. If required.
 function updateStatus() {
            // Get the "p" tag by its id
            var statusElement = document.getElementById("status");
	 statusElement.remove();

            // Update the text content of the "p" tag
            statusElement.textContent = "Entered Metaverse";

            // Optionally, you can also create and append an h1 tag
            var h1Element = document.createElement("h1");
            h1Element.textContent = "Entered Metaverse";

            // Append the h1 tag to the body or another container if needed
            document.body.appendChild(h1Element);
        }