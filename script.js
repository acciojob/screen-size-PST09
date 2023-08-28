//your JS code here. If required.
function getSize(){
	let height=document.documentElement.clientHeight;
	let width=document.documentElement.clientWidth;
	document.getElementById("sizeInfo").innerHTML="<h1>Width: " +width+" and Height: "+height+"</h1>";
}