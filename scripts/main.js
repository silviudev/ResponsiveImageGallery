var items = Array.from(document.getElementsByClassName("gallery-item"));
var modal = document.getElementById("modal");
var fader = document.getElementById("fader");
var closeModalButton = document.getElementById("modal-close");
var modalImage = document.getElementById("modal-img");
var modalUp = false;

items.forEach(function(image){
	image.addEventListener("click", function(){
		if(!modalUp){
			modal.classList.remove("hidden");
			fader.classList.add("fade");
			modalImage.src = image.childNodes[0].nextElementSibling.src;
			modalUp = true;			
		}
	});
});

closeModalButton.addEventListener("click", function(){
	modalUp = false;
	fader.classList.remove("fade");
	modal.classList.add("hidden");
});




