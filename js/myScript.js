// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("text");
// Get the button that opens the modal
var orangeBtn = document.getElementById("orange");
// Get the button that opens the modal
var whiteBtn = document.getElementById("white");
// Get the button that opens the modal
var greenBtn = document.getElementById("green");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
setTimeout(()=>{btn.click();},1000);
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
	$('#innerContain').html("<h1>Hello all,</h1><p class='lineHeight'>The future of our country depends upon the actions of today.<br> Let us always be responsible. Happy Independence Day Let us celebrate August 15 with great and pomp show as well as utmost safety.<br> Happy 74th Independence Day to us!.</p>");
}
// When the user clicks the button, open the modal 
orangeBtn.onclick = function() {
    modal.style.display = "block";
	$('#innerContain').html("<h1>India flag saffron (Kesari) color</h1><p class='lineHeight'>The deep saffron colors shows courage and sacrifice. The saffron color is also called the Bhagwa color, this is a symbol of Hindusm.</p>");
}
// When the user clicks the button, open the modal 
whiteBtn.onclick = function() {
    modal.style.display = "block";
	$('#innerContain').html("<h1>India flag White color</h1><p class='lineHeight'>The white color symbolism for peace, unity and truth.<br>The blue colors for the sky and the ocean this is in Chakra. The Chakra has 24 spokes, representing the 24 hours in a day. </p>");
}
// When the user clicks the button, open the modal 
greenBtn.onclick = function() {
    modal.style.display = "block";
	$('#innerContain').html("<h1>India flag green color</h1><p class='lineHeight'> The green color shows the culture and fertility.</p>");
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

