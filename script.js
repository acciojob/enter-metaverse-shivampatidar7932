function updateStatus() {
    // Get the "p" tag by its id
   const para=document.querySelector("p");
	const h1=document.createElement("h1");
	h1.innerText="Entered Metaverse";
	h1.id="status"
	para.remove();
	document.body.before(h1);
}
